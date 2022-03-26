import { RequestOptions } from './types';

export const defaultFetcher = async (
  url: string,
  body: any,
  method = 'POST',
  headers = {},
) => fetch(url, {
  method,
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
});

type DefaultFetchData = [any, RequestInit['method'], RequestInit['headers']];
export const defaultOptions: RequestOptions<any, DefaultFetchData> = {
  initWith: undefined,
  cache: true,
  ignoreWhenFetching: false,

  UNSTABLE__suspense: false,

  fetcher: defaultFetcher,
};
