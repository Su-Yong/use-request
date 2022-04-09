import type { RequestKey, State } from './types';
export type MiddlewareData<Data, FetchData extends unknown[]> = {
  key: RequestKey;
  state: State<Data, any>;
  fetchData: FetchData;
};

export type Middleware<Data, FetchData extends unknown[]> = (
  data: MiddlewareData<Data, FetchData>,
) => Middleware<Data, FetchData> | void;


export const createMiddleware = <Data, FetchData extends unknown[]>(
  func: Middleware<Data, FetchData>,
) => func;
