import type { State } from './types';

export type Listener<Data, Err> = (state: Partial<State<Data, Err>>) => void;

const map = new Map<string, Listener<any, any>[]>();

export const broadcast = <Data, Err>(id: string, state: Partial<State<Data, Err>>) => {
  const listeners = map.get(id);

  listeners?.forEach((listener) => listener(state));
};

export const subscribe = <Data, Err>(id: string, listener: Listener<Data, Err>) => {
  const beforeArray = map.get(id);

  if (beforeArray) map.set(id, [...beforeArray, listener]);
  else map.set(id, [listener]);
  
  const unsubscribe = () => {
    map.delete(id);
  };

  return unsubscribe;
};
