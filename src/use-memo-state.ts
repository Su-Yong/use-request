import React, { SetStateAction, useCallback, useMemo, useRef, useState } from 'react';

type Dispatch<T> = <Key extends keyof T>(key: Key, action: SetStateAction<T[Key]>) => void;
type Mutate<T> = {
  ref: React.MutableRefObject<T>;
  rerender: () => void;
};

const useMemoState = <Value extends object>(initValue: Value): [Value, Dispatch<Value>, Mutate<Value>] => {
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
    const newState = (
      actions instanceof Function
        ? actions.call(this, value.current[key])
        : actions
    );

    value.current[key as keyof Value] = newState;

    if (observed.current.has(key.toString())) {
      rerender({});
    }
  }, [value, observed]);

  const rerenderer = useCallback(() => rerender({}), [rerender]);

  return [
    proxy,
    dispatcher,
    {
      ref: value,
      rerender: rerenderer,
    },
  ];
};

export default useMemoState;
