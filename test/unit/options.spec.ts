import { RequestOptions } from '../../src';
import { defaultOptions } from '../../src/default';
import { createOptions, mergeOptions } from '../../src/options';

const getTarget = (name: string): RequestOptions<string, { type: string, name: string }[]> => ({
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

    expect(target.initWith![0]).toEqual({
      type: 'test',
      name: 'basic usage',
    });
    expect(target.cache).toBeUndefined();
    expect(target.fetcher).toBeUndefined();
    expect(target.ignoreWhenFetching).toBeUndefined();
    expect(target.UNSTABLE__suspense).toBeUndefined();

    expect(result.initWith![0]).toEqual({
      type: 'test',
      name: 'basic usage',
    });
    expect(result.cache).toBe(false);
    expect(result.fetcher).toBeUndefined();
    expect(result.ignoreWhenFetching).toBeUndefined();
    expect(result.UNSTABLE__suspense).toBeUndefined();
  });

  it('empty fallback', () => {
    const target = getTarget('empty fallback');

    const result = mergeOptions(target, {});

    expect(target.initWith![0]).toEqual({
      type: 'test',
      name: 'empty fallback',
    });
    expect(target.cache).toBeUndefined();
    expect(target.fetcher).toBeUndefined();
    expect(target.ignoreWhenFetching).toBeUndefined();
    expect(target.UNSTABLE__suspense).toBeUndefined();

    expect(result.initWith![0]).toEqual({
      type: 'test',
      name: 'empty fallback',
    });
    expect(result.cache).toBeUndefined();
    expect(result.fetcher).toBeUndefined();
    expect(result.ignoreWhenFetching).toBeUndefined();
    expect(result.UNSTABLE__suspense).toBeUndefined();
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

    expect(target.initWith![0]).toEqual({
      type: 'test',
      name: 'override priority',
    });
    expect(target.cache).toBeUndefined();
    expect(target.fetcher).toBeUndefined();
    expect(target.ignoreWhenFetching).toBeUndefined();
    expect(target.UNSTABLE__suspense).toBeUndefined();

    expect(result.initWith![0]).toEqual({
      type: 'test',
      name: 'override priority',
    });
    expect(result.cache).toBeUndefined();
    expect(result.fetcher).toBeUndefined();
    expect(result.ignoreWhenFetching).toBeUndefined();
    expect(result.UNSTABLE__suspense).toBeUndefined();
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
    expect(target.initWith![0]).toEqual({
      type: 'test',
      name: 'array merge strategy',
    });
    expect(target.cache).toBeUndefined();
    expect(target.fetcher).toBeUndefined();
    expect(target.ignoreWhenFetching).toBeUndefined();
    expect(target.UNSTABLE__suspense).toBeUndefined();

    expect(result.initWith).toHaveLength(2);
    expect(result.initWith![0]).toEqual({
      type: 'test',
      name: 'array merge strategy',
    });
    expect(result.initWith![1]).toEqual({
      type: 'first object',
      name: 'is same as target',
    });
    expect(result.cache).toBeUndefined();
    expect(result.fetcher).toBeUndefined();
    expect(result.ignoreWhenFetching).toBeUndefined();
    expect(result.UNSTABLE__suspense).toBeUndefined();
  });
});

describe('Utils: createOptions', () => {
  it('basic usage', () => {
    const option = createOptions({
      initWith: null,
      cache: false,
      ignoreWhenFetching: true,
    });

    // fetcher is function
    expect(JSON.stringify(option)).toEqual(JSON.stringify({
      ...defaultOptions,
      initWith: null,
      cache: false,
      ignoreWhenFetching: true,
    }));
  });
});
