import type { State } from './types';
import type { Cache } from './request-config';
import { DefaultData, DefaultError, DefaultFetchData } from '.';

export interface RequestOptions<Data = DefaultData, Err = DefaultError, FetchData extends unknown[] = DefaultFetchData> {
  initWith: FetchData | boolean;
  cache: Cache<State<Data, Err>> | boolean;
  dedupingFetching: boolean;
  initWhenUndefined: boolean;
  ignoreSameValue: boolean;

  fetcher: (url: string, ...args: FetchData) => Promise<Data>;
}

export const defaultFetcher = async (
  url: string,
  body: any,
  method: RequestInit['method'] | null = 'POST',
  headers: RequestInit['headers'] = {},
  type: 'JSON' | 'TEXT' | 'RAW' = 'JSON',
) => {
  const response = await fetch(url, {
    method: method ? method : body ? 'POST' : 'GET',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  if (type === 'JSON') return response.json();
  if (type === 'TEXT') return response.text();
  return response;
}

export const defaultOptions: RequestOptions<any, any, any> = {
  initWith: true,
  cache: true,
  dedupingFetching: true,
  initWhenUndefined: true,
  ignoreSameValue: false,

  fetcher: defaultFetcher,
};

const keys: (keyof RequestOptions<any, any, any>)[] = [
  'initWith',
  'cache',
  'dedupingFetching',
  'initWhenUndefined',

  'fetcher',
];

export const mergeOptions = <Data, Err, FetchData extends unknown[]>(
  primary: Partial<RequestOptions<Data, Err, FetchData>>,
  secondary: Partial<RequestOptions<Data, Err, FetchData>>,
): Partial<RequestOptions<Data, Err, FetchData>> => {
  const result: Partial<RequestOptions<Data, Err, FetchData>> = {};

  keys.forEach((key) => {
    if (key === 'initWith') {
      const availables = [];
      if (Array.isArray(primary.initWith)) availables.push(primary.initWith);
      if (Array.isArray(secondary.initWith)) availables.push(secondary.initWith);
      
      if (availables.length > 0) {
        const initWith = [] as unknown as FetchData;

        availables.forEach((it) => {
          if (initWith.length < it.length) {
            initWith.push(...it.slice(initWith.length));
          }
        });

        result.initWith = initWith;
      } else if (!Array.isArray(result.initWith)) {
        if (Object.hasOwnProperty.call(primary, 'initWith')) result.initWith = primary.initWith;
        else if (Object.hasOwnProperty.call(secondary, 'initWith')) result.initWith = secondary.initWith;
      }
    } else {
      if (Object.hasOwnProperty.call(primary, key)) {
        result[key] = primary[key] as any;
      } else if (Object.hasOwnProperty.call(secondary, key)) {
        result[key] = secondary[key] as any;
      }
    }
  });

  return result;
};

export const createOptions = <Data = DefaultData, Err = DefaultError, FetchData extends unknown[] = DefaultFetchData>(
  options: Partial<RequestOptions<Data, Err, FetchData>>,
): RequestOptions<Data, Err, FetchData> => mergeOptions(
  options,
  defaultOptions,
) as RequestOptions<Data, Err, FetchData>;
