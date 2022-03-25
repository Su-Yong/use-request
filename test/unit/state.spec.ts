import { StateManager } from '../../src';

describe('state', () => {
  it('set, get', () => {
    const state = new StateManager<string, Error>();
    state.set('test', {
      url: 'test-url',
      data: 'value',
    });

    expect(state.get('test')).toEqual({
      url: 'test-url',
      data: 'value',
    });
  });

  it ('delete', () => {
    const state = new StateManager<string, Error>();
    state.set('test', {
      url: 'test-url',
      data: 'value',
    });

    expect(state.get('test')).toEqual({
      url: 'test-url',
      data: 'value',
    });

    state.delete('test');

    expect(state.get('test')).toBeUndefined();
  });

  it ('clear', () => {
    const state = new StateManager<string, Error>();
    state.set('test', {
      url: 'test-url',
      data: 'value',
    });
    state.set('test2', {
      url: 'test-url',
      error: Error('test'),
    });

    state.clear();
    expect(state.get('test')).toBeUndefined();
    expect(state.get('test2')).toBeUndefined();
  });
});