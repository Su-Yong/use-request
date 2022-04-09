import React, { useContext, useMemo } from 'react';
import { createOptions, defaultOptions } from './options';

import type { RequestOptions, RequiredRequestOptions } from './options';
import type { State } from './types';
import { Middleware } from '.';

export interface Cache<Data> {
  get: (key: string) => Data | undefined | null;
  set: (key: string, data: Data) => void;
  delete: (key: string) => void;
  has: (key: string) => boolean;
  clear: () => void;
}

export interface RequestConfigType<Data, FetchData extends unknown[]> {
  cache: Cache<State<Data, any>>;
  options: RequestOptions<Data, FetchData>;
  middlewares: Middleware<Data, FetchData>[];
}

export const RequestConfigContext = React.createContext<RequestConfigType<any, any>>({
  cache: new Map(),
  options: defaultOptions,
  middlewares: [],
});

export const useRequestConfig = <
  Data,
  FetchData extends unknown[] = [],
>(): (
  Omit<RequestConfigType<Data, FetchData>, 'options'>
  & { options: RequiredRequestOptions<Data, FetchData> }
) => {
  const { cache, options, middlewares, } = useContext(RequestConfigContext);

  const requiredOptions = useMemo(() => createOptions<Data, FetchData>(options), [options]);

  return {
    cache,
    options: requiredOptions,
    middlewares,
  }
};

export type RequestConfigProps<Data, FetchData extends unknown[]> = (
  Omit<Partial<RequestConfigType<Data, FetchData>>, 'middlewares'>
  & {
    children: React.ReactNode;
    middleware?: Middleware<Data, FetchData> | Middleware<Data, FetchData>[];
  }
); 
export const RequestConfig = <Data, FetchData extends unknown[]>({
  cache,
  options,
  middleware,
  children,
}: RequestConfigProps<Data, FetchData>): JSX.Element => {
  const {
    cache: fallbackCache,
    options: fallbackOptions,
    middlewares: fallbackMiddlewares,
  }: RequestConfigType<Data, FetchData> = {
    cache: new Map(),
    options: {},
    middlewares: [],
  };

  return (
    <RequestConfigContext.Provider
      value={{
        cache: cache ?? fallbackCache,
        options: options ?? fallbackOptions,
        middlewares: (
          Array.isArray(middleware)
            ? middleware
            : middleware
              ? [middleware]
              : fallbackMiddlewares
        ),
      }}
    >
      {children}
    </RequestConfigContext.Provider>
  )
};
