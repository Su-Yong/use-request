export interface RequestOptions<Data, FetchData extends unknown[]> {
  initWith?: FetchData | undefined | null;
  cache?: boolean;
  ignoreWhenFetching?: boolean;
  dedupingWhenCached?: boolean;
  UNSTABLE__suspense?: boolean; // UNSTABLE

  fetcher?: (url: string, ...args: FetchData) => Promise<Data>;
}

export type RequiredRequestOptions<Data, FetchData extends unknown[]> = (
  Required<Omit<RequestOptions<Data, FetchData>, 'initWith'>>
  & { initWith: RequestOptions<Data, FetchData>['initWith'] }
);

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

export const defaultOptions: RequiredRequestOptions<any, any> = {
  initWith: undefined,
  cache: true,
  ignoreWhenFetching: false,
  dedupingWhenCached: true,
  UNSTABLE__suspense: false,

  fetcher: defaultFetcher,
};

const keys: (keyof RequiredRequestOptions<any, any>)[] = [
  'initWith',
  'cache',
  'ignoreWhenFetching',
  'dedupingWhenCached',
  'UNSTABLE__suspense',

  'fetcher',
];

export const mergeOptions = <Data, FetchData extends unknown[]>(
  primary: RequestOptions<Data, FetchData>,
  secondary: RequestOptions<Data, FetchData>,
): RequiredRequestOptions<Data, FetchData> => {
  const result: RequiredRequestOptions<Data, FetchData> = { ...defaultOptions };

  keys.forEach((key) => {
    if (key === 'initWith') {
      const availables = [];
      if (Array.isArray(primary.initWith)) availables.push(primary.initWith);
      if (Array.isArray(secondary.initWith)) availables.push(secondary.initWith);
      
      if (availables.length > 0) {
        result.initWith ??= [] as unknown as FetchData;

        availables.forEach((initWith) => {
          if (result.initWith!.length < initWith.length) {
            result.initWith!.push(...initWith.slice(result.initWith!.length));
          }
        });
      } else {
        if (Object.hasOwnProperty.call(primary, 'initWith')) result.initWith = primary.initWith;
        else if (Object.hasOwnProperty.call(secondary, 'initWith')) result.initWith = secondary.initWith;
      }
    }

    if (Object.hasOwnProperty.call(primary, key)) {
      result[key] = primary[key] as any;
    } else if (Object.hasOwnProperty.call(secondary, key)) {
      result[key] = secondary[key] as any;
    }
  });

  return result;
};

export const createOptions = <Data, FetchData extends unknown[]>(
  options: RequestOptions<Data, FetchData>,
): RequiredRequestOptions<Data, FetchData> => mergeOptions(
  options,
  defaultOptions,
);
