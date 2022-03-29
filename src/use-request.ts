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
  FetchData extends unknown[] = [],
>(
  key: RequestKey,
  initOptions: RequestOptions<Data, FetchData> = {},
): Requester<Data, Err, RequestOptions<Data, FetchData>> => {
  const config = useRequestConfig<Data, FetchData>();
  const mountRef = useRef(false);

  const id = useMemo(() => typeof key === 'string' ? key : key.id ?? key.url, [key]);
  const url = useMemo(() => typeof key === 'string' ? key : key.url, [key]);
  const options = useMemo(() => createOptions(mergeOptions(initOptions ?? {}, config.options)), [initOptions, config.options]);

  const {
    data: initData,
    error: initError,
    isValidating: initIsValidating,
  } = getCachedValue<Data, Err, FetchData>(id, options, config.cache);

  const [result, setState, { ref, rerender }] = useMemoState<State<Data, Err>>({
    data: initData,
    error: initError,
    isValidating: initIsValidating || !!options.initWith,
  });

  const fetcher: RequestFetcher<RequestOptions<Data, FetchData>> = useCallback(async (...args) => {
    if (options.ignoreWhenFetching && ref.current.isValidating) {
      return;
    }

    setState('isValidating', true);

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
      config.cache.set(id, newState);
      broadcast(id, newState);
    } else {
      if (Object.hasOwnProperty.call(newState, 'data')) ref.current.data = newState.data;
      if (Object.hasOwnProperty.call(newState, 'error')) ref.current.error = newState.error;
      if (Object.hasOwnProperty.call(newState, 'isValidating')) ref.current.isValidating = newState.isValidating;

      rerender();
    }
  }, [url, options, ref, mountRef]);
  
  useEffect(() => {
    if (options.cache) {
      const unsubscribe = subscribe<Data, Err>(id, (newState) => {
        if (Object.hasOwnProperty.call(newState, 'data')) ref.current.data = newState.data;
        if (Object.hasOwnProperty.call(newState, 'error')) ref.current.error = newState.error;
        if (Object.hasOwnProperty.call(newState, 'isValidating')) ref.current.isValidating = newState.isValidating;

        rerender();
      });

      return unsubscribe;
    }
  }, [id, options.cache, ref]);

  useEffect(() => {
    if (options.initWith) {
      fetcher(...options.initWith);
    }
    // ignore deps
  }, []);

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
