import { defaultOptions } from './default';
import type { RequestOptions } from './types';

const isObject = (something: unknown): something is Record<string, unknown> => {
  return !!something && typeof something === 'object';
}

const merge = (
  target: Record<string, unknown>,
  ...sources: (Record<string, unknown>)[]
): Record<string, unknown> => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          if (Array.isArray(source[key])) Object.assign(target, { [key]: [] });
          else Object.assign(target, { [key]: {} });
        }

        merge(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>);
      } else {
        Object.assign(target, { [key]: source[key] });  
      }
    }
  }

  return merge(target, ...sources);
};

export const mergeOptions = <Data, FetcherData extends unknown[]>(
  target: Partial<RequestOptions<Data, FetcherData>>,
  fallback: Partial<RequestOptions<Data, FetcherData>> = defaultOptions,
): RequestOptions<Data, FetcherData> => {
  return merge({}, fallback, target);
};

export const createOptions = <
  Data,
  FetcherData extends unknown[],
>(
  options: RequestOptions<Data, FetcherData>,
): RequestOptions<Data, FetcherData> => mergeOptions(options);
