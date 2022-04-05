import { RequestOptions } from './options';

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

export const defaultOptions: RequestOptions<any, any> = {
  initWith: undefined,
  cache: true,
  dedupingFetching: true,
  initWhenUndefined: true,

  UNSTABLE__suspense: false,

  fetcher: defaultFetcher,
};
