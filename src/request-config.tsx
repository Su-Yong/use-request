import React, { useContext, useMemo } from 'react';
import { createOptions, defaultOptions } from './options';

import type { RequestOptions } from './options';
import type { State } from './types';
import { Middleware } from '.';

export interface Cache<Data> {
  get: (key: string) => Data | undefined | null;
  set: (key: string, data: Data) => void;
  delete: (key: string) => void;
  has: (key: string) => boolean;
  clear: () => void;
}

export interface RequestConfigType<Data, Err, FetchData extends unknown[]> {
  cache: Cache<State<Data, Err>>;
  options: RequestOptions<Data, Err, FetchData>;
  middlewares: Middleware<Data, Err, FetchData>[];
}

export const RequestConfigContext = React.createContext<RequestConfigType<any, any, any>>({
  cache: new Map(),
  options: defaultOptions,
  middlewares: [],
});

export const useRequestConfig = <
  Data,
  Err,
  FetchData extends unknown[] = [],
>(): (
  Omit<RequestConfigType<Data, Err, FetchData>, 'options'>
  & { options: RequestOptions<Data, Err, FetchData> }
) => {
  const { cache, options, middlewares, } = useContext(RequestConfigContext);

  const requiredOptions = useMemo(() => createOptions<Data, Err, FetchData>(options), [options]);

  return {
    cache,
    options: requiredOptions,
    middlewares,
  }
};

export type RequestConfigProps<Data, Err, FetchData extends unknown[]> = (
  Omit<Partial<RequestConfigType<Data, Err, FetchData>>, 'middlewares' | 'options'>
  & {
    children: React.ReactNode;
    options?: Partial<RequestOptions<Data, Err, FetchData>>;
    middleware?: Middleware<Data, Err, FetchData> | Middleware<Data, Err, FetchData>[];
  }
); 
export const RequestConfig = <Data, Err, FetchData extends unknown[]>({
  cache,
  options,
  middleware,
  children,
}: RequestConfigProps<Data, Err, FetchData>): JSX.Element => {
  const {
    cache: fallbackCache,
    options: fallbackOptions,
    middlewares: fallbackMiddlewares,
  }: RequestConfigType<Data, Err, FetchData> = {
    cache: new Map(),
    options: defaultOptions,
    middlewares: [],
  };

  return (
    <RequestConfigContext.Provider
      value={{
        cache: cache ?? fallbackCache,
        options: createOptions(options ?? fallbackOptions),
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
