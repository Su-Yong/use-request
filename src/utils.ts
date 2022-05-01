export type DeepPartial<T> = T | (
  T extends object
    ? { [key in keyof T]?: DeepPartial<T[key]> }
    : T
);

export const isEqual = (a: any, b: any): boolean => {
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.length === b.length && a.every((_, index) => isEqual(a[index], b[index]));
    } else {
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);

      if (aKeys.length === bKeys.length && aKeys.every((aKey) => bKeys.some((bKey) => aKey === bKey))) {
        return aKeys.every((key) => isEqual(a[key], b[key]));
      }

      return false;
    }
  }

  return a === b;
};
