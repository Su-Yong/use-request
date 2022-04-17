import { isEqual } from '../../src/utils';

describe('utils', () => {
  it('isEqual(normal)', () => {
    // boolean
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(true, false)).toBe(false);

    // number, bigint
    expect(isEqual(10, 10)).toBe(true);
    expect(isEqual(10, 1.0)).toBe(false);
    expect(isEqual(10, 10n)).toBe(false);
    expect(isEqual(10n, 10n)).toBe(true);

    // string
    expect(isEqual('str', 'str')).toBe(true);
    expect(isEqual('str', 'string')).toBe(false);

    // null, undefined, symbols
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual(Symbol(), Symbol())).toBe(false);
    const symbol = Symbol();
    expect(isEqual(symbol, symbol)).toBe(true);
  });

  it('isEqual(array)', () => {
    expect(isEqual([1, 2], [1, 2])).toBe(true);
    expect(isEqual([1, 2], [2, 1])).toBe(false);

    // Array-Like object
    const arrayLike = {
      0: 1,
      1: 2,
      length: 2,
    };
    expect(isEqual(arrayLike, [1, 2])).toBe(false);
    expect(isEqual(Array.from(arrayLike), [1, 2])).toBe(true);  
  });

  it('isEqual(object)', () => {
    expect(isEqual({ test: 'value' }, { test: 'value' })).toBe(true);
    expect(isEqual({ test: 'value', test2: 10 }, { test2: 10, test: 'value' })).toBe(true);
    expect(isEqual({ test: 'value', test2: { nested: true } }, { test2: { nested: true }, test: 'value' })).toBe(true);
    expect(isEqual({ test: 'value', test2: [1, { nested: true }] }, { test2: [{ nested: true }, 1], test: 'value' })).toBe(false);
  });
});