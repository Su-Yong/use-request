import type { State } from './types';
import type { Cache } from './request-config';

export interface RequestOptions<Data, FetchData extends unknown[]> {
  initWith?: FetchData | boolean;
  cache?: Cache<State<Data, any>> | boolean;
  dedupingFetching?: boolean;
  initWhenUndefined?: boolean;
  UNSTABLE__suspense?: boolean; // UNSTABLE

  fetcher?: (url: string, ...args: FetchData) => Promise<Data>;
}

export type RequiredRequestOptions<Data, FetchData extends unknown[]> = Required<RequestOptions<Data, FetchData>>;

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

export const defaultOptions: RequestOptions<any, any> = {
  initWith: true,
  cache: true,
  dedupingFetching: true,
  initWhenUndefined: true,
  UNSTABLE__suspense: false,

  fetcher: defaultFetcher,
};

const keys: (keyof RequiredRequestOptions<any, any>)[] = [
  'initWith',
  'cache',
  'dedupingFetching',
  'initWhenUndefined',
  'UNSTABLE__suspense',

  'fetcher',
];

export const mergeOptions = <Data, FetchData extends unknown[]>(
  primary: RequestOptions<Data, FetchData>,
  secondary: RequestOptions<Data, FetchData>,
): RequestOptions<Data, FetchData> => {
  const result: RequestOptions<Data, FetchData> = {};

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

export const createOptions = <Data, FetchData extends unknown[]>(
  options: RequestOptions<Data, FetchData>,
): RequiredRequestOptions<Data, FetchData> => mergeOptions(
  options,
  defaultOptions,
) as RequiredRequestOptions<Data, FetchData>;
