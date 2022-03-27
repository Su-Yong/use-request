import { RequestOptions } from './options';

export type DefaultData = any;
export type DefaultError = Error;
export type DefaultFetcherData = unknown;

export type RequestFetcher<Option extends RequestOptions<any, any>> = (
  Required<Option>['fetcher'] extends (url: string, ...args: infer K) => unknown
    ? (...args: K) => void | Promise<void>
    : () => void | Promise<void>
);

export type NetworkJob<Data, Err> = {
  data: Data | undefined;
  error: Err | undefined;
  isValidating: boolean;
};
export interface Requester<
  Data = DefaultData,
  Err = DefaultError,
  Option extends RequestOptions<any, any> = RequestOptions<Data, any>,
> extends NetworkJob<Data, Err> {
  fetcher: RequestFetcher<Option>;
}

export type RequestID = string;
export type RequestKey = string | {
  id?: RequestID;
  url: string;
};
