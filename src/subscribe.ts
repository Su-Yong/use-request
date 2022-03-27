import { NetworkJob } from '.';

export type Listener<Data, Err> = (state: NetworkJob<Data, Err>) => void;

const map = new Map<string, Listener<any, any>[]>();

export const broadcast = <Data, Err>(id: string, state: NetworkJob<Data, Err>) => {
  const listeners = map.get(id);

  listeners?.forEach((listener) => {
    listener(state);
  });
};

export const subscribe = <Data, Err>(id: string, listener: Listener<Data, Err>) => {
  if (map.has(id)) map.set(id, [...(map.get(id) ?? []), listener]);
  else map.set(id, [listener]);
  
  const unsubscribe = () => {
    map.delete(id);
  };

  return unsubscribe;
};
