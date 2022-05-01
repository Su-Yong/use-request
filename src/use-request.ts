import { useCallback, useEffect, useMemo, useRef } from 'react';
import { createOptions, mergeOptions } from './options';
import { useRequestConfig } from './request-config';
import { broadcast, subscribe } from './subscribe';
import useMemoState from './use-memo-state';

import type { RequestOptions } from './options';
import type { RequestConfigType } from './request-config';
import type { DefaultData, DefaultError, State, Requester, RequestFetcher, RequestKey } from './types';
import type { Middleware } from './middleware';
import { DefaultFetchData } from '.';
import { isEqual } from './utils';

const getCachedValue = <Data, Err, FetchData extends unknown[]>(
  id: string | undefined,
  options: RequestOptions<Data, Err, FetchData>,
  config: RequestConfigType<Data, Err, FetchData>['cache'],
): State<Data, Err> => {
  const fallback: State<Data, Err> = {
    data: undefined,
    error: undefined,
    isValidating: false,
  };

  if (id && options.cache && options.initWith !== false) {
    return config?.get(id) ?? fallback;
  }

  return fallback;
}

const useRequest = <
  Data = DefaultData,
  Err = DefaultError,
  FetchData extends unknown[] = DefaultFetchData,
>(
  key: RequestKey,
  initOptions: Partial<RequestOptions<Data, Err, FetchData>> = {},
): Requester<Data, Err, RequestOptions<Data, Err, FetchData>> => {
  const config = useRequestConfig<Data, Err, FetchData>();
  const mountRef = useRef(false);
  const configRef = useRef(config);
  const keyRef = useRef(key);

  const id = useMemo(() => typeof key === 'string' ? key : key.id ?? key.url, [key]);
  const url = useMemo(() => typeof key === 'string' ? key : key.url, [key]);
  const options = useMemo(() => createOptions(mergeOptions(initOptions ?? {}, config.options)), [initOptions, config.options]);

  const {
    data: initData,
    error: initError,
    isValidating: initIsValidating,
  } = getCachedValue<Data, Err, FetchData>(id, options, config.cache);

  const [result, setState, ref] = useMemoState<State<Data, Err>>({
    data: initData,
    error: initError,
    isValidating: initIsValidating || Array.isArray(options.initWith),
  });

  const changeState = useCallback((newState: Partial<State<Data, Err>>) => {
    const filteredState = Object.entries(newState).filter(([key, data]) => !options.ignoreSameValue || !isEqual(ref.current[key as keyof State<Data, Err>], data));
    const keys = filteredState.map(([key]) => key) as (keyof State<Data, Err>)[];
    const values = filteredState.map(([, value]) => value);

    setState(keys, values);
  }, [ref, options.ignoreSameValue]);

  const fetcher: RequestFetcher<RequestOptions<Data, Err, FetchData>> = useCallback(async (...args) => {
    const resolvedMiddleware = configRef.current.middlewares
      .reverse()
      .map((middleware) => middleware({
        key: keyRef.current,
        state: {
          data: ref.current.data,
          error: ref.current.error,
          isValidating: ref.current.isValidating,
        },
        fetchData: args,
      }))
      .filter((it) => it) as Middleware<Data, Err, FetchData>[];

    if (options.dedupingFetching) {
      if (options.cache && configRef.current.cache.get(id)?.isValidating) return;
      if (!options.cache && ref.current.isValidating) return;
    }

    setState('isValidating', true);
    if (options.cache) {
      const nowCache = (
        typeof options.cache === 'boolean'
          ? configRef.current.cache
          : options.cache
      );
 
      const newState = {
        data: ref.current.data,
        error: ref.current.error,
        isValidating: true,
      };
      nowCache.set(id, newState);
      broadcast(id, { isValidating: true });
    }

    const newState: State<Data, Err> = await options.fetcher(url, ...args)
      .then((response) => ({
        data: response,
        error: undefined,
        isValidating: false,
      }))
      .catch((err) => ({
        data: undefined,
        error: err,
        isValidating: false,
      }));

    if (!mountRef.current) return;
    if (options.cache) {
      const nowCache = (
        typeof options.cache === 'boolean'
          ? configRef.current.cache
          : options.cache
      );
 
      nowCache.set(id, newState);
      broadcast(id, newState);
    } else {
      changeState(newState);
    }

    resolvedMiddleware
      .reverse()
      .forEach((middleware) => {
        middleware({
          key: keyRef.current,
          state: newState,
          fetchData: args,
        });
      });
  }, [url, options.cache, options.dedupingFetching, options.fetcher, ref, mountRef, configRef, keyRef, changeState]);
  
  useEffect(() => {
    if (options.cache) {
      const unsubscribe = subscribe<Data, Err>(id, changeState);

      return unsubscribe;
    }
  }, [id, options.cache, changeState]);

  useEffect(() => {
    if (Array.isArray(options.initWith)) {
      if (options.initWhenUndefined) {
        if (!ref.current.data) {
          ref.current.isValidating = false;
          fetcher(...options.initWith);
          ref.current.isValidating = true;
        }
      } else {
        ref.current.isValidating = false;
        fetcher(...options.initWith);
        ref.current.isValidating = true;
      }
    }
    // ignore deps
  }, [ref]);

  useEffect(() => {
    mountRef.current = true;

    return () => {
      mountRef.current = false;
    };
    // ignore deps
  }, []);

  return Object.assign(result, { fetcher });
};

export default useRequest;
