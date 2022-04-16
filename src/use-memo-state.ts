import React, { SetStateAction, useCallback, useMemo, useRef, useState } from 'react';

interface Dispatch<T> {
  <Key extends keyof T>(key: Key, action: SetStateAction<T[Key]>): void;
  <Keys extends (keyof T)[], Actions extends SetStateAction<T[Keys[number]]>[]>(key: Keys, action: Actions): void;
}

const useMemoState = <Value extends object>(initValue: Value): [Value, Dispatch<Value>, React.MutableRefObject<Value>] => {
  const value = useRef(initValue);
  const observed = useRef<Set<string>>(new Set());

  const [, rerender] = useState({});

  const proxy = useMemo(() => new Proxy(value.current, {
    get(target: any, name: string) {
      observed.current.add(name);

      return target[name];
    },
  }), [value, observed]);

  const dispatcher: Dispatch<Value> = useCallback(
    (keys: any, actions: any) => {
      if (Array.isArray(keys)) {
        keys.forEach((key, index) => {
          const newState = (
            actions[index] instanceof Function
              ? actions[index](value.current[key as keyof Value])
              : actions[index]
            );

          value.current[key as keyof Value] = newState;
        });


        if (keys.some((key) => observed.current.has(key))) rerender({});
      } else {
        const newState = (
          actions instanceof Function
            ? actions(value.current[keys as keyof Value])
            : actions
        );
    
        value.current[keys as keyof Value] = newState;
    
        if (observed.current.has(keys)) rerender({});
      }
    },
    [value, observed],
  );

  const rerenderer = useCallback(() => rerender({}), [rerender]);

  return [
    proxy,
    dispatcher,
    value,
  ];
};

export default useMemoState;
