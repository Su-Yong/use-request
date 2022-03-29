import { useCallback, useEffect, useMemo, useRef } from 'react';
import { createOptions, mergeOptions, RequestOptions } from './options';
import { RequestConfigType, useRequestConfig } from './request-config';
import { broadcast, subscribe } from './subscribe';

import { DefaultData, DefaultError, State, Requester, RequestFetcher, RequestKey } from './types';
import useMemoState from './use-memo-state';

const getCachedValue = <Data, Err, FetchData extends unknown[]>(
  id: string | undefined,
  options: RequestOptions<Data, FetchData>,
  config: RequestConfigType<Data, FetchData>['cache'],
): State<Data, Err> => {
  const fallback: State<Data, Err> = {
    data: undefined,
    error: undefined,
    isValidating: false,
  };

  if (id && options.cache && options.initWith !== null) {
    return config?.get(id) ?? fallback;
  }

  return fallback;
}

const useRequest = <
  Data = DefaultData,
  Err = DefaultError,
  FetchData extends unknown[] = any[],
>(
  key: RequestKey,
  initOptions: RequestOptions<Data, FetchData> = {},
): Requester<Data, Err, RequestOptions<Data, FetchData>> => {
  const config = useRequestConfig<Data, FetchData>();
  const mountRef = useRef(false);
  const configRef = useRef(config);

  const id = useMemo(() => typeof key === 'string' ? key : key.id ?? key.url, [key]);
  const url = useMemo(() => typeof key === 'string' ? key : key.url, [key]);
  const options = useMemo(() => createOptions(mergeOptions(initOptions ?? {}, config.options)), [initOptions, config.options]);

  const {
    data: initData,
    error: initError,
    isValidating: initIsValidating,
  } = getCachedValue<Data, Err, FetchData>(id, options, config.cache);

  const [result, setState, { ref, observed, rerender }] = useMemoState<State<Data, Err>>({
    data: initData,
    error: initError,
    isValidating: initIsValidating || !!options.initWith,
  });

  const fetcher: RequestFetcher<RequestOptions<Data, FetchData>> = useCallback(async (...args) => {
    if (options.dedupingFetching && configRef.current.cache.get(id)?.isValidating) {
      return;
    }

    setState('isValidating', true);
    configRef.current.cache.set(id, {
      data: ref.current.data,
      error: ref.current.error,
      isValidating: true,
    });

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
      configRef.current.cache.set(id, newState);
      broadcast(id, newState);
    } else {
      if (Object.hasOwnProperty.call(newState, 'data')) ref.current.data = newState.data;
      if (Object.hasOwnProperty.call(newState, 'error')) ref.current.error = newState.error;
      if (Object.hasOwnProperty.call(newState, 'isValidating')) ref.current.isValidating = newState.isValidating;

      rerender();
    }
  }, [url, options, ref, mountRef, configRef]);
  
  useEffect(() => {
    if (options.cache) {
      const unsubscribe = subscribe<Data, Err>(id, (newState) => {
        let check = [];
        if (Object.hasOwnProperty.call(newState, 'data') && (check.push('data') !== null)) ref.current.data = newState.data;
        if (Object.hasOwnProperty.call(newState, 'error') && (check.push('error') !== null)) ref.current.error = newState.error;
        if (Object.hasOwnProperty.call(newState, 'isValidating') && (check.push('isValidating') !== null)) ref.current.isValidating = newState.isValidating;

        if (check.some((it) => observed.current.has(it))) rerender();
      });

      return unsubscribe;
    }
  }, [id, options.cache, ref, observed]);

  useEffect(() => {
    if (options.initWith) {
      console.log(options.initWhenUndefined, !ref.current.data);
      if (options.initWhenUndefined) {
        if (!ref.current.data) {
          console.log('run fetcher', options.initWith);
          fetcher(...options.initWith);
        }
      } else {
        fetcher(...options.initWith);
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
