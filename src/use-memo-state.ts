import { useCallback, useMemo, useRef, useState } from "react";

type Map<Parent, T extends (keyof Parent)[]> = (
  T extends [infer K, ...infer L]
    ? L extends (keyof Parent)[] ? K extends (keyof Parent)
      ? [Parent[K] | ((prev: Parent[K]) => Parent[K]), ...Map<Parent, L>]
    : never : never
    : T extends [] ? [] : T extends keyof Parent ?
      [Parent[T] | ((prev: Parent[T]) => Parent[T])]
    : []
);

type Action<T, Key extends keyof T | (keyof T)[]> = (
  Key extends keyof T
    ? T[Key] | ((prevState: T[Key]) => T[Key])
    : Key extends (keyof T)[]
      ? Map<T, Key>
      : never
);

type Dispatch<T> = <Key extends keyof T | (keyof T)[]>(key: Key, action: Action<T, Key>) => void;
type Referer<T> = React.MutableRefObject<T>;

const useMemoState = <Value extends object>(initValue: Value): [Value, Dispatch<Value>, Referer<Value>] => {
  const value = useRef(initValue);
  const observed = useRef<Set<string>>(new Set());

  const [, rerender] = useState({});

  const proxy = useMemo(() => new Proxy(value.current, {
    get(target: any, name: string) {
      observed.current.add(name);

      return target[name];
    },
  }), [value, observed]);

  const dispatcher: Dispatch<Value> = useCallback((
    key,
    actions,
  ) => {
    if (Array.isArray(key) && Array.isArray(actions)) {
      key.forEach((it, index) => {
        const action = actions[index];

        let result = null;

        if (action instanceof Function) result = action(value.current[it]);
        else result = action;

        value.current[it] = result;
      });
    }

    if (!Array.isArray(key) && !Array.isArray(actions)) {
      actions
      const newState = (
        actions instanceof Function
          ? actions.call(this, value.current[key as keyof Value])
          : actions
      );

      value.current[key as keyof Value] = newState;
    }

    if (observed.current.has(key.toString())) {
      rerender({});
    }
  }, [value, observed]);

  return [
    proxy,
    dispatcher,
    value,
  ];
};

export default useMemoState;
