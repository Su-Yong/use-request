import React, { useContext, useMemo } from 'react';
import { State } from './types';
import { createOptions, RequestOptions, RequiredRequestOptions, defaultOptions } from './options';

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
}

export const RequestConfigContext = React.createContext<RequestConfigType<any, any>>({
  cache: new Map(),
  options: defaultOptions,
});

export const useRequestConfig = <
  Data,
  FetchData extends unknown[] = [],
>(): (
  Omit<RequestConfigType<Data, FetchData>, 'options'>
  & { options: RequiredRequestOptions<Data, FetchData> }
) => {
  const { cache, options } = useContext(RequestConfigContext);

  const requiredOptions = useMemo(() => createOptions<Data, FetchData>(options), [options]);

  return {
    cache,
    options: requiredOptions,
  }
};

export type RequestConfigProps<Data, FetchData extends unknown[]> = (
  Partial<RequestConfigType<Data, FetchData>>
  & { children: React.ReactNode; }
); 
export const RequestConfig = <Data, FetchData extends unknown[]>({
  cache,
  options,
  children,
}: RequestConfigProps<Data, FetchData>): JSX.Element => {
  const {
    cache: fallbackCache,
    options: fallbackOptions,
  }: RequestConfigType<Data, FetchData> = {
    cache: new Map(),
    options: {},
  };

  return (
    <RequestConfigContext.Provider
      value={{
        cache: cache ?? fallbackCache,
        options: options ?? fallbackOptions,
      }}
    >
      {children}
    </RequestConfigContext.Provider>
  )
};
