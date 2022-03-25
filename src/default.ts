import { RequestOptions } from './types';

export const defaultOptions: RequestOptions<any, any> = {
  initWith: undefined,
  cache: true,
  ignoreWhenFetching: false,

  UNSTABLE__suspense: false,

  fetcher: async () => {},
};
