import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { createOptions, RequestConfig, useRequest, Cache, createMiddleware, CacheData } from '../src';

import { time } from './utils';

const options = createOptions({
  fetcher: async (url, data: string = 'test') => {
    await time(100);

    if (data === 'error') throw Error(`TestError: ${url}:${data}`);

    return `${url}:${data}`;
  }
});

describe('useRequest', () => {
  let cache: Cache<CacheData<any, any>> = new Map();

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
      expect(renderCount).toBe(3);
      expect(screen.getByTestId('data')).toHaveTextContent('test');
      expect(screen.getByTestId('validate')).toHaveTextContent('false');  
    });
  });

  it('option(initWith: Data)', async () => {
    const TestComponent = () => {
      const { data, isValidating } = useRequest('/initWith', {
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

  it('option(initWith: false)', async () => {
    const TestComponent = () => {
      const { data, isValidating, fetcher } = useRequest('/initWith', {
        ...options,
        initWith: false,
      });

      const click = () => {
        fetcher('false');
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
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/initWith:false$/);
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

  it('option(initWith: default(true))', async () => {
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

  it('option(cache: Data)', async () => {
    const newCache = new Map();
    const TestComponent2 = React.memo(() => {
      const { fetcher } = useRequest('/cache', {
        ...options,
        cache: newCache,
      });

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
        cache: newCache,
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
    
      expect(cache.get('/cache')?.state?.data).toBeUndefined();
      expect(newCache.get('/cache')?.state?.data).toEqual('/cache:main');
    });
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

  it('option(dedupingFetching: true)', async () => {
    const TestComponent = () => {
      const { data, isValidating, fetcher } = useRequest('/dedupingFetching', {
        ...options,
        dedupingFetching: true,
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
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/dedupingFetching:main$/);
    });
  });

  it('option(dedupingFetching: false)', async () => {
    const TestComponent = () => {
      const { data, isValidating, fetcher } = useRequest('/dedupingFetching', {
        ...options,
        dedupingFetching: false,
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
      expect(screen.getByTestId('data')).toHaveTextContent(/^\/dedupingFetching:validate$/);
    });
  });

  it('option(ignoreSameValue: true)', async () => {
    let renderCount = 0;
    const TestComponent = () => {
      const { data, fetcher } = useRequest('/ignoreSameValue', {
        ...options,
        ignoreSameValue: true,
      });

      const click = () => {
        fetcher();
      }

      renderCount += 1;

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
    expect(renderCount).toBe(1);

    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByTestId('button'));
      await waitFor(() => {
        expect(renderCount).toBe(2);
        expect(screen.getByTestId('data')).toHaveTextContent(/^\/ignoreSameValue:test$/);
      });
    }
  });

  it('option(ignoreSameValue: false)', async () => {
    let renderCount = 0;
    const TestComponent = () => {
      const { data, fetcher } = useRequest('/ignoreSameValue', {
        ...options,
        ignoreSameValue: false,
      });

      const click = () => {
        fetcher();
      }

      renderCount += 1;

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
    expect(renderCount).toBe(1);

    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByTestId('button'));
      await waitFor(() => {
        expect(renderCount).toBe(2 + i);
        expect(screen.getByTestId('data')).toHaveTextContent(/^\/ignoreSameValue:test$/);
      });
    }
  });

  it('option(revalidationInterval: 1000)', async () => {
    const TestComponent = () => {
      const { data, fetcher } = useRequest('/ignoreSameValue', {
        ...options,
        revalidationInterval: 1000,
      });

      const click = () => {
        fetcher(Date.now().toString());
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

    let response: any = null;
    
    fireEvent.click(screen.getByTestId('button'));
    await waitFor(() => {
      response = screen.getByTestId('data').textContent;
      expect(response).toBeTruthy();
    });
    
    await time(500);
    fireEvent.click(screen.getByTestId('button'));
    await waitFor(() => {
      expect(screen.getByTestId('data')).toHaveTextContent(response);
    });
  });

  it('option(revalidationInterval: 0)', async () => {
    const TestComponent = () => {
      const { data, fetcher } = useRequest('/ignoreSameValue', {
        ...options,
        revalidationInterval: 0,
      });

      const click = () => {
        fetcher(Date.now().toString());
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

    let response: any = null;
    
    fireEvent.click(screen.getByTestId('button'));
    await waitFor(() => {
      response = screen.getByTestId('data').textContent;
      expect(response).toBeTruthy();
    });
    
    await time(500);
    fireEvent.click(screen.getByTestId('button'));
    await waitFor(() => {
      expect(screen.getByTestId('data')).not.toHaveTextContent(response);
    });
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

  it('render time', async () => {
    let count1 = 0;
    let count2 = 0;

    const Component1 = () => {
      const { data, isValidating } = useRequest('/render', options);
      
      count1 += 1;

      return (
        <div>
          {data?.toString()}
          {isValidating.toString()}
        </div>
      );
    };
    const Component2 = () => {
      const { data, fetcher } = useRequest('/render', options);

      const onClick = () => {
        fetcher('data');
      };

      count2 += 1;

      return (
        <div>
          {data?.toString()}
          <button data-testid={'submit'} onClick={onClick} />
        </div>
      );
    };

    render(
      <RequestConfig cache={cache}>
        <Component1 />
        <Component2 />
      </RequestConfig>
    );

    expect(count1).toBe(1);
    expect(count2).toBe(1);

    fireEvent.click(screen.getByTestId('submit'));
    await waitFor(() => {
      expect(count1).toBe(3);
      expect(count2).toBe(2);
    });
  });

  it('middleware', async () => {
    const log: any[] = [];
    const logger = createMiddleware((beforeState) => {
      log.push(beforeState);

      return (afterState) => {
        log.push(afterState);
      }
    });

    const Component = () => {
      const { data, fetcher } = useRequest('/middleware', options);

      const onClick = () => {
        fetcher('data');
      };

      return (
        <div>
          {data?.toString()}
          <button data-testid={'submit'} onClick={onClick} />
        </div>
      );
    };
    
    render(
      <RequestConfig
        cache={cache}
        middleware={logger}
      >
        <Component />
      </RequestConfig>
    );

    expect(log).toHaveLength(0);

    fireEvent.click(screen.getByTestId('submit'));
    
    await waitFor(() => {
      expect(log).toHaveLength(2);
      expect(log[0]).toEqual({
        key: '/middleware',
        state: {
          data: undefined,
          error: undefined,
          isValidating: false,
        },
        fetchData: [
          'data'
        ],
      });
      expect(log[1]).toEqual({
        key: '/middleware',
        state: {
          data: '/middleware:data',
          error: undefined,
          isValidating: false,
        },
        fetchData: [
          'data'
        ],
      });
    });
  });

  it('multiple middleware', async () => {
    const log: string[] = [];
    const logger1 = createMiddleware(() => {
      log.push('before:1');

      return () => {
        log.push('after:1');
      }
    });
    const logger2 = createMiddleware(() => {
      log.push('before:2');

      return () => {
        log.push('after:2');
      }
    });

    const Component = () => {
      const { data, fetcher } = useRequest('/middleware', options);

      const onClick = () => {
        fetcher('data');
      };

      return (
        <div>
          {data?.toString()}
          <button data-testid={'submit'} onClick={onClick} />
        </div>
      );
    };
    
    render(
      <RequestConfig
        cache={cache}
        middleware={[logger1, logger2]}
      >
        <Component />
      </RequestConfig>
    );

    expect(log).toHaveLength(0);

    fireEvent.click(screen.getByTestId('submit'));
    
    await waitFor(() => {
      expect(log).toHaveLength(4);
      expect(log[0]).toEqual('before:2');
      expect(log[1]).toEqual('before:1');
      expect(log[2]).toEqual('after:1');
      expect(log[3]).toEqual('after:2');
    });
  });
});
