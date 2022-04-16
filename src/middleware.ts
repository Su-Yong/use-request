import type { RequestKey, State } from './types';
export type MiddlewareData<Data, Err,FetchData extends unknown[]> = {
  key: RequestKey;
  state: State<Data, Err>;
  fetchData: FetchData;
};

export type Middleware<Data, Err, FetchData extends unknown[]> = (
  data: MiddlewareData<Data, Err, FetchData>,
) => Middleware<Data, Err, FetchData> | void;


export const createMiddleware = <Data, Err, FetchData extends unknown[]>(
  func: Middleware<Data, Err, FetchData>,
) => func;
