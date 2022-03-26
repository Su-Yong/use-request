export type DefaultData = any;
export type DefaultError = Error;
export type DefaultFetcherData = unknown;

export type RequestFetcher<Option extends RequestOptions<any, any>> = (
  Required<Option>['fetcher'] extends (url: string, ...args: infer K) => unknown
    ? (...args: K) => void | Promise<void>
    : () => void | Promise<void>
);

export interface Requester<
  Data = DefaultData,
  Err = DefaultError,
  Option extends RequestOptions<any, any> = RequestOptions<Data, any>,
> {
  fetcher: RequestFetcher<Option>;
  data: Data | undefined;
  error: Err | undefined;
  isValidating: boolean;
}

export type RequestID = string;
export type RequestKey = string | {
  id?: RequestID;
  url: string;
};

export interface RequestOptions<Data, FetchData extends unknown[]> {
  /**
   * null -> always init undefined
   * undefined -> do nothing
   * FetcherData -> send request
   * default: undefined
   */
  initWith?: FetchData | null;

  /**
   * true -> initialize data from cache
   * false -> do nothing
   * default: true
   */
  cache?: boolean;

  /**
   * true -> doesn't send request if fetching is running
   * false -> send request regardless of state
   * default: false
   */
  ignoreWhenFetching?: boolean;

  /**
   * true -> doesn't send request if same request is fetching
   * false -> send request same request
   * default: true
   */
  dedupingWhenCached?: boolean;

  /**
   * TODO
   */
  UNSTABLE__suspense?: boolean; // UNSTABLE

  /**
   * 
   */
  fetcher?: (url: string, ...args: FetchData) => Promise<Data>;
}

export interface NetworkJob<Data = any, Err = Error> {
  url: string;
  data?: Data;
  error?: Err;
}

export interface CacheSetEvent<Job> {
  type: 'cache-set';
  key: string;
  value: Job;
}
export type StateEvent<Job> = CacheSetEvent<Job>;
export type StateListener<Job> = (event: StateEvent<Job>) => void;

export interface RequestStateManager<Job = NetworkJob> {
  get: (key: string) => Job | undefined;
  set: (key: string, data: Job) => void;
  delete: (key: string) => void;

  subscribe: (listener: StateListener<Job>) => void;
  unsubscribe: (listener: StateListener<Job>) => void;
}

export interface RequestConfig<Job = NetworkJob> {
  state?: RequestStateManager<Job>;
}
