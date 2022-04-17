import { createOptions, defaultOptions, mergeOptions, RequestOptions } from '../../src';

const getTarget = (name: string): Partial<RequestOptions<string, Error, { type: string, name: string }[]>> => ({
  initWith: [
    {
      type: 'test',
      name,
    },
  ],
});

describe('Utils: mergeOptions', () => {
  it('basic usage', () => {
    const target = getTarget('basic usage');

    const result = mergeOptions(target, {
      cache: false,
    });

    expect((target.initWith as any)[0]).toEqual({
      type: 'test',
      name: 'basic usage',
    });
    expect(target.cache).toBeUndefined();
    expect(target.fetcher).toBeUndefined();
    expect(target.dedupingFetching).toBeUndefined();

    expect((result.initWith as any)[0]).toEqual({
      type: 'test',
      name: 'basic usage',
    });
    expect(result.cache).toBe(false);
    expect(result.fetcher).toBeUndefined();
    expect(result.dedupingFetching).toBeUndefined();
  });

  it('empty fallback', () => {
    const target = getTarget('empty fallback');

    const result = mergeOptions(target, {});

    expect((target.initWith as any)[0]).toEqual({
      type: 'test',
      name: 'empty fallback',
    });
    expect(target.cache).toBeUndefined();
    expect(target.fetcher).toBeUndefined();
    expect(target.dedupingFetching).toBeUndefined();

    expect((result.initWith as any)[0]).toEqual({
      type: 'test',
      name: 'empty fallback',
    });
    expect(result.cache).toBeUndefined();
    expect(result.fetcher).toBeUndefined();
    expect(result.dedupingFetching).toBeUndefined();
  });

  it('override priority', () => {
    const target = getTarget('override priority');

    const result = mergeOptions(target, {
      initWith: [
        {
          type: 'ignore',
          name: 'not visible',
        },
      ],
    });

    expect((target.initWith as any)[0]).toEqual({
      type: 'test',
      name: 'override priority',
    });
    expect(target.cache).toBeUndefined();
    expect(target.fetcher).toBeUndefined();
    expect(target.dedupingFetching).toBeUndefined();

    expect((result.initWith as any)[0]).toEqual({
      type: 'test',
      name: 'override priority',
    });
    expect(result.cache).toBeUndefined();
    expect(result.fetcher).toBeUndefined();
    expect(result.dedupingFetching).toBeUndefined();
  });

  it('array merge strategy', () => {
    const target = getTarget('array merge strategy');

    const result = mergeOptions(target, {
      initWith: [
        {
          type: 'test',
          name: 'array merge strategy',
        },
        {
          type: 'first object',
          name: 'is same as target',
        },
      ],
    });

    expect(target.initWith).toHaveLength(1);
    expect((target.initWith as any)[0]).toEqual({
      type: 'test',
      name: 'array merge strategy',
    });
    expect(target.cache).toBeUndefined();
    expect(target.fetcher).toBeUndefined();
    expect(target.dedupingFetching).toBeUndefined();

    expect(result.initWith).toHaveLength(2);
    expect((result.initWith as any)[0]).toEqual({
      type: 'test',
      name: 'array merge strategy',
    });
    expect((result.initWith as any)[1]).toEqual({
      type: 'first object',
      name: 'is same as target',
    });
    expect(result.cache).toBeUndefined();
    expect(result.fetcher).toBeUndefined();
    expect(result.dedupingFetching).toBeUndefined();
  });
});

describe('Options: createOptions', () => {
  it('basic usage', () => {
    const option: Partial<RequestOptions> = createOptions({
      initWith: false,
      cache: false,
      dedupingFetching: false,
    });

    const expectTo: Partial<RequestOptions> = {
      ...defaultOptions,
      initWith: false,
      cache: false,
      dedupingFetching: false,
    };

    delete option.fetcher;
    delete expectTo.fetcher;

    // fetcher is function
    expect(option).toEqual(expectTo);
  });
});
