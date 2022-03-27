import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { createOptions, NetworkJob, RequestConfig, useRequest, Cache } from '../src';

import { time } from './utils';

const options = createOptions({
  fetcher: async (url, data: string = 'test') => {
    await time(100);

    if (data === 'error') throw Error(`TestError: ${url}:${data}`);

    return `${url}:${data}`;
  }
});

describe('useRequest', () => {
  let cache: Cache<NetworkJob<any, any>> = new Map();

  beforeEach(() => {
    cache = new Map();
  });

  it('basic usage', async () => {
    let renderCount = 0;

    const TestComponent = () => {
      const { data, isValidating, fetcher } = useRequest('/test', options);

      const click = () => {
        fetcher();
      }

      renderCount += 1;

      return (
        <div>
          <div data-testid={'data'}>{data}</div>
          <div data-testid={'validate'}>{isValidating.toString()}</div>
          <button data-testid={'button'} onClick={click} />
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    expect(renderCount).toBe(1);
    expect(screen.getByTestId('data')).toHaveTextContent('');
    expect(screen.getByTestId('validate')).toHaveTextContent('false');

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('data')).toHaveTextContent('');
    expect(screen.getByTestId('validate')).toHaveTextContent('true');
    
    await waitFor(() => {
      expect(renderCount).toBe(4);
      expect(screen.getByTestId('data')).toHaveTextContent('test');
      expect(screen.getByTestId('validate')).toHaveTextContent('false');  
    });
  });

  it('option(initWith: Data)', async () => {
    const TestComponent = () => {
      const { data, isValidating, fetcher } = useRequest('/initWith', {
        ...options,
        initWith: ['initWith'],
      });

      return (
        <div>
          <div data-testid={'data'}>
            {data?.toString()}
          </div>
          <div data-testid={'validate'}>
            {isValidating.toString()}
          </div>
        </div>
      );
    };

    const { unmount } = render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );

    expect(screen.getByTestId('data')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('validate')).toHaveTextContent(/^true$/);

    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/initWith:initWith$/);
      expect(screen.getByTestId('validate')).toHaveTextContent(/^false$/);
    });

    unmount();

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    expect(screen.getByTestId('data')).toHaveTextContent(/^\/initWith:initWith$/);
    expect(screen.getByTestId('validate')).toHaveTextContent(/^true$/);
  });

  it('option(initWith: null)', async () => {
    const TestComponent = () => {
      const { data, isValidating, fetcher } = useRequest('/initWith', {
        ...options,
        initWith: null,
      });

      const click = () => {
        fetcher('null');
      }

      return (
        <div>
          <div data-testid={'data'}>
            {data?.toString()}
          </div>
          <div data-testid={'validate'}>
            {isValidating.toString()}
          </div>
          <button data-testid={'button'} onClick={click} />
        </div>
      );
    };

    const { unmount } = render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    expect(screen.getByTestId('data')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('validate')).toHaveTextContent(/^false$/);

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('data')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('validate')).toHaveTextContent(/^true$/);

    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/initWith:null$/);
      expect(screen.getByTestId('validate')).toHaveTextContent(/^false$/);
    });

    unmount();

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    expect(screen.getByTestId('data')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('validate')).toHaveTextContent(/^false$/);
  });

  it('option(initWith: default(undefined))', async () => {
    const TestComponent = () => {
      const { data, isValidating, fetcher } = useRequest('/initWith', options);

      const click = () => {
        fetcher('default');
      }

      return (
        <div>
          <div data-testid={'data'}>
            {data?.toString()}
          </div>
          <div data-testid={'validate'}>
            {isValidating.toString()}
          </div>
          <button data-testid={'button'} onClick={click} />
        </div>
      );
    };

    const { unmount } = render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>,
    );
    expect(screen.getByTestId('data')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('validate')).toHaveTextContent(/^false$/);

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('data')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('validate')).toHaveTextContent(/^true$/);

    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/initWith:default$/);
      expect(screen.getByTestId('validate')).toHaveTextContent(/^false$/);
    });

    unmount();

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>,
    );
    expect(screen.getByTestId('data')).toHaveTextContent(/^\/initWith:default$/);
    expect(screen.getByTestId('validate')).toHaveTextContent(/^false$/);
  });

  it('option(cache: true)', async () => {
    const TestComponent2 = React.memo(() => {
      const { fetcher } = useRequest('/cache', options);

      const click = () => {
        fetcher('sub');
      }

      return (
        <button data-testid={'sub-button'} onClick={click} />
      )
    });

    const TestComponent = () => {
      const { data, fetcher } = useRequest('/cache', {
        ...options,
        cache: true,
      });

      const click = () => {
        fetcher('main');
      }

      return (
        <div>
          <div data-testid={'data'}>{data}</div>
          <TestComponent2 />
          <button data-testid={'main-button'} onClick={click} />
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    expect(screen.getByTestId('data')).toHaveTextContent(/^$/);

    fireEvent.click(screen.getByTestId('sub-button'));
    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/cache:sub$/);
    });

    fireEvent.click(screen.getByTestId('main-button'));
    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/cache:main$/);
    });
  });

  it('option(cache: false)', async () => {
    const TestComponent2 = React.memo(() => {
      const { fetcher } = useRequest('/cache', options);

      const click = () => {
        fetcher('sub');
      }

      return (
        <button data-testid={'sub-button'} onClick={click} />
      )
    });

    const TestComponent = () => {
      const { data, fetcher } = useRequest('/cache', {
        ...options,
        cache: false,
      });

      const click = () => {
        fetcher('main');
      }

      return (
        <div>
          <div data-testid={'data'}>{data}</div>
          <TestComponent2 />
          <button data-testid={'main-button'} onClick={click} />
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    expect(screen.getByTestId('data')).toHaveTextContent(/^$/);

    fireEvent.click(screen.getByTestId('sub-button'));
    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^$/);
    });

    fireEvent.click(screen.getByTestId('main-button'));
    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/cache:main$/);
    });
  });

  it('option(ignoreWhenFetching: true)', async () => {
    const TestComponent = () => {
      const { data, isValidating, fetcher } = useRequest('/ignoreWhenFetching', {
        ...options,
        ignoreWhenFetching: true,
      });

      const click = () => {
        if (isValidating) fetcher('validate');
        else fetcher('main');
      }

      return (
        <div>
          <div data-testid={'data'}>{data}</div>
          <button data-testid={'button'} onClick={click} />
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    fireEvent.click(screen.getByTestId('button'));
    fireEvent.click(screen.getByTestId('button'));
    fireEvent.click(screen.getByTestId('button'));
    
    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/ignoreWhenFetching:main$/);
    });
  });

  it('option(ignoreWhenFetching: false)', async () => {
    const TestComponent = () => {
      const { data, isValidating, fetcher } = useRequest('/ignoreWhenFetching', {
        ...options,
        ignoreWhenFetching: false,
      });

      const click = () => {
        if (isValidating) fetcher('validate');
        else fetcher('main');
      }

      return (
        <div>
          <div data-testid={'data'}>{data}</div>
          <button data-testid={'button'} onClick={click} />
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    fireEvent.click(screen.getByTestId('button'));
    fireEvent.click(screen.getByTestId('button'));
    fireEvent.click(screen.getByTestId('button'));
    
    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/ignoreWhenFetching:validate$/);
    });
  });

  it('option(dedupingWhenCached: true)', async () => {
    const newFetcher = jest.fn(options.fetcher);

    const TestComponent = () => {
      const { fetcher } = useRequest('/dedupingWhenCached', {
        ...options,
        fetcher: newFetcher,
        dedupingWhenCached: true,
      });

      const click = () => {
        fetcher('deduping');
      }

      return (
        <div>
          <button data-testid={'button'} onClick={click} />
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    fireEvent.click(screen.getByTestId('button'));
    fireEvent.click(screen.getByTestId('button'));
    fireEvent.click(screen.getByTestId('button'));
    
    await waitFor(() => {
      expect(newFetcher.mock.calls.length).toBe(1);
    });
  });

  it('option(dedupingWhenCached: false)', async () => {
    const newFetcher = jest.fn(options.fetcher);

    const TestComponent = () => {
      const { fetcher } = useRequest('/dedupingWhenCached', {
        ...options,
        fetcher: newFetcher,
        dedupingWhenCached: false,
      });

      const click = () => {
        fetcher('deduping');
      }

      return (
        <div>
          <button data-testid={'button'} onClick={click} />
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    fireEvent.click(screen.getByTestId('button'));
    fireEvent.click(screen.getByTestId('button'));
    fireEvent.click(screen.getByTestId('button'));
    
    await waitFor(() => {
      expect(newFetcher.mock.calls.length).toBe(3);
    });
  });

  xit('option(UNSTABLE__suspense: true)', async () => {
    throw Error('TODO');
  });

  xit('option(UNSTABLE__suspense: false)', async () => {
    throw Error('TODO');
  });

  it('specific id', async () => {
    const TestComponent = ({ id }: { id: string }) => {
      const { data, fetcher } = useRequest({
        id,
        url: '/id',
      }, options);

      const click = () => {
        fetcher(id);
      };

      return (
        <div>
          <div data-testid={`data-${id}`}>{data}</div>
          <button data-testid={`button-${id}`} onClick={click} />
        </div>
      );
    };

    const TestComponentUrl1 = () => {
      const { data, fetcher } = useRequest({ url: '/id' }, options);

      const click = () => {
        fetcher('onlyUrl');
      };

      return (
        <div>
          <div data-testid={'data-url1'}>{data}</div>
          <button data-testid={'button-url1'} onClick={click} />
        </div>
      );
    };

    const TestComponentUrl2 = () => {
      const { data } = useRequest('/id', options);

      return (
        <div>
          <div data-testid={'data-url2'}>{data}</div>
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <TestComponent id={'test1'} />
        <TestComponent id={'test2'} />
        <TestComponentUrl1 />
        <TestComponentUrl2 />
      </RequestConfig>
    );
    expect(screen.getByTestId('data-test1')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('data-test2')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('data-url1')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('data-url2')).toHaveTextContent(/^$/);

    fireEvent.click(screen.getByTestId('button-test1'));
    await waitFor(() => {
      expect(screen.getByTestId('data-test1')).toHaveTextContent(/^\/id:test1$/);
      expect(screen.getByTestId('data-test2')).toHaveTextContent(/^$/);
      expect(screen.getByTestId('data-url1')).toHaveTextContent(/^$/);
      expect(screen.getByTestId('data-url2')).toHaveTextContent(/^$/);
    });

    fireEvent.click(screen.getByTestId('button-test2'));
    await waitFor(() => {
      expect(screen.getByTestId('data-test1')).toHaveTextContent(/^\/id:test1$/);
      expect(screen.getByTestId('data-test2')).toHaveTextContent(/^\/id:test2$/);
      expect(screen.getByTestId('data-url1')).toHaveTextContent(/^$/);
      expect(screen.getByTestId('data-url2')).toHaveTextContent(/^$/);
    });

    fireEvent.click(screen.getByTestId('button-url1'));
    await waitFor(() => {
      expect(screen.getByTestId('data-test1')).toHaveTextContent(/^\/id:test1$/);
      expect(screen.getByTestId('data-test2')).toHaveTextContent(/^\/id:test2$/);
      expect(screen.getByTestId('data-url1')).toHaveTextContent(/^\/id:onlyUrl$/);
      expect(screen.getByTestId('data-url2')).toHaveTextContent(/^\/id:onlyUrl$/);
    });
  });

  it('fetcher throw Error', async () => {
    const TestComponent = () => {
      const { data, error, fetcher } = useRequest('/test', options);

      const click = () => {
        fetcher('error');
      }

      return (
        <div>
          <div data-testid={'data'}>{data}</div>
          <div data-testid={'error'}>{error?.message}</div>
          <button data-testid={'button'} onClick={click} />
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <TestComponent />
      </RequestConfig>
    );
    expect(screen.getByTestId('data')).toHaveTextContent(/^$/);
    expect(screen.getByTestId('error')).toHaveTextContent(/^$/);

    fireEvent.click(screen.getByTestId('button'));
    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(/^$/);
      expect(screen.getByTestId('error')).toHaveTextContent('TestError');  
    });
  });
});
