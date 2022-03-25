import { NetworkJob, RequestID, RequestStateManager, StateListener } from './types';

class StateManager<Data = any, Err = Error> implements RequestStateManager<NetworkJob<Data, Err>> {
  private cache: Map<RequestID, NetworkJob<Data, Err>> = new Map();
  private listener: StateListener<NetworkJob<Data, Err>>[] = [];

  get(key: string): NetworkJob<Data, Err> | undefined {
    return this.cache.get(key);
  }

  set(key: string, value: NetworkJob<Data, Err>) {
    const result = this.cache.set(key, value);

    this.listener.forEach((func) => {
      func({
        type: 'cache-set',
        key,
        value,
      });
    });

    return result;
  }

  delete(key: string) {
    return this.cache.delete(key);
  }

  clear() {
    return this.cache.clear();
  }

  subscribe(func: StateListener<NetworkJob<Data, Err>>) {
    this.listener.push(func);
  }

  unsubscribe(func: StateListener<NetworkJob<Data, Err>>) {
    const index = this.listener.findIndex((it) => it === func);

    if (index >= 0) {
      this.listener.splice(index, 1);
    }
  }
}

export default StateManager;
