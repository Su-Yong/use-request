import { useMemoState } from '../src';

import { fireEvent, render, screen } from '@testing-library/react';

describe('useMemoState', () => {
  it('basic usage', () => {
    let renderCount = 0;

    const TestComponent = () => {
      const [data, setState] = useMemoState({
        test1: 'test1',
        test2: 'test2',
      });

      const change = () => {
        setState('test1', 'test2');
      };

      renderCount += 1;

      return (
        <div>
          test1: {data.test1}
          <button data-testid={'button'} onClick={change} />
        </div>
      );
    };

    render(<TestComponent />);
    expect(renderCount).toBe(1);

    fireEvent.click(screen.getByTestId('button'));
    expect(renderCount).toBe(2);
  });

  it('ignore rerender', () => {
    let renderCount = 0;

    const TestComponent = () => {
      const [data, setState] = useMemoState({
        test1: 'test1',
        test2: 'test2',
      });

      const change = () => {
        setState('test2', 'test1');
      };

      renderCount += 1;

      return (
        <div>
          test1: {data.test1}
          <button data-testid={'button'} onClick={change} />
        </div>
      );
    };

    render(<TestComponent />);
    expect(renderCount).toBe(1);

    fireEvent.click(screen.getByTestId('button'));
    expect(renderCount).toBe(1);
  });

  it('setState modify function', () => {
    const randomString = Math.random().toString();
    const TestComponent = () => {
      const [data, setState] = useMemoState({
        test1: randomString,
      });

      const change = () => {
        setState('test1', (it) => it + it);
      };

      return (
        <div>
          <div data-testid={'data'}>{data.test1}</div>
          <button data-testid={'button'} onClick={change} />
        </div>
      );
    };

    render(<TestComponent />);
    expect(screen.getByTestId('data')).toHaveTextContent(randomString);

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('data')).toHaveTextContent(`${randomString}${randomString}`);
  });
});
