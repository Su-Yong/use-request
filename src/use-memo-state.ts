import { SetStateAction, useCallback, useMemo, useRef, useState } from "react";

type Dispatch<T> = (key: keyof T, action: SetStateAction<T[typeof key]>) => void;
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

  const dispatcher = useCallback((
    key: keyof Value,
    action: SetStateAction<Value[typeof key]>,
  ) => {
    const newState = (
      action instanceof Function
        ? action(value.current[key])
        : action
    );

    value.current[key] = newState;

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
