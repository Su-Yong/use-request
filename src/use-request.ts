import { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { NetworkJob, RequestConfig } from '.';
import { defaultOptions } from './default';
import { RequestConfigContext } from './request-config';

import { DefaultData, DefaultError, Requester, RequestFetcher, RequestKey, RequestOptions, StateListener } from "./types";
import useMemoState from './use-memo-state';
import { mergeOptions } from './utils';

const getCachedValue = <Data, Err, FetchData extends unknown[]>(
  id: string | undefined,
  options: RequestOptions<Data, FetchData>,
  state: RequestConfig['state'],
): NetworkJob<Data, Err> | undefined => {
  if (options.cache && id && options.initWith !== null) {
    return state?.get(id) as NetworkJob<Data, Err> | undefined;
  }

  return undefined;
}

const useRequest = <
  Data = DefaultData,
  Err = DefaultError,
  FetchData extends unknown[] = [],
>(
  key: RequestKey,
  initOptions: RequestOptions<Data, FetchData> = {},
): Requester<Data, Err, RequestOptions<Data, FetchData>> => {
  const mountRef = useRef(false);

  const { state } = useContext(RequestConfigContext);
  const id = useMemo(() => typeof key === 'string' ? key : key.id ?? key.url, [key]);
  const url = useMemo(() => typeof key === 'string' ? key : key.url, [key]);
  const options = useMemo(() => mergeOptions(initOptions, defaultOptions as RequestOptions<Data, FetchData>), [initOptions]);

  const {
    data: initData,
    error: initError,
  } = (
    getCachedValue<Data, Err, FetchData>(id, options, state)
      ?? { data: undefined, error: undefined }
  );

  const [result, setState, ref] = useMemoState<Omit<Requester<Data, Err, RequestOptions<Data, FetchData>>, 'fetcher'>>({
    data: initData,
    error: initError,
    isValidating: !!options.initWith,
  });

  const fetcher: RequestFetcher<RequestOptions<Data, FetchData>> = useCallback(async (...args) => {
    if (options.ignoreWhenFetching && ref.current.isValidating) {
      return;
    }

    setState('isValidating', true);

    let isError = false;
    const response = await options.fetcher?.(url, ...args)?.catch((err) => {
      isError = true;

      return err;
    });

    if (!mountRef.current) return;
    if (options.cache) {
      const value = (
        isError
          ? {
            url,
            error: response,
          }
          : {
            url,
            data: response,
          }
      );

      state?.set(id, value);
    } else {
      if (isError) setState('error', response as Err);
      else setState('data', response as Data);
    }

    setState('isValidating', false);
  }, [url, options, ref, mountRef]);
  
  useEffect(() => {
    const listener: StateListener<NetworkJob> = (event) => {
      if (options.cache && event.key === id) {
        if (event.value.data) setState('data', event.value.data);
        if (event.value.error) setState('error', event.value.error as unknown as Err);
      }
    };

    state?.subscribe?.(listener);

    return () => {
      state?.unsubscribe?.(listener);
    };
  }, [id, options.cache]);

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
