---
id: start
title: Start
---

# Start
This library is available for React Project

## Quick Start
Before using `useRequest`, create a component used `useRequest`.
```tsx
function Component() {
  return (
    <div>
      <div>Data</div>
      <button>Upload</button>
    </div>
  );
};
```

then use `useRequest` if you use RESTful API
```tsx
function Component() {
  const { data } = useRequest();
  
  return (
    <div>
      <div>{data}</div>
      <button>Upload</button>
    </div>
  );
};
```

write URL where send request
```tsx
const Component = () => {
  const { data } = useRequest('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <div>{data}</div>
      <button>Upload</button>
    </div>
  );
};
```

And make button send specific request
```tsx live
function Component() {
  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts');

  const onClick = () => {
    fetcher({
      title: 'foo',
      content: 'bar',
      userId: 1,
    });
  };

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onClick}>Upload</button>
    </div>
  );
}
```

That's all. `useRequest` is so easy to use. Not only this.

```tsx live
function Component() {
  const renderCount = useRef(0);
  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts');

  const onClick = () => {
    fetcher({
      title: 'foo',
      content: 'bar',
      userId: 1,
    });
  };

  renderCount.current += 1;

  return (
    <div>
      <div>Last data is<pre>{JSON.stringify(data, null, 2)}</pre></div>
      <div>Component is rendered {renderCount.current} time(s)</div>
      <button onClick={onClick}>Upload</button>
    </div>
  );
}
```
In this example, even though the button is not pressed, there is already data. The reason is that we hit the upload button above this example.

`use-request` will **sync** the values if they are the same URL. Therefore, in this example, the data exists even if the button is not pressed. If you did not press the button in the example above, press any button in the two examples and check the result. The `data` in the two examples works with each other.

:::info
Of course you can also send the **request** individually even if the **URL** is the same. In this case, you can use [cache](options#cache) option and [RequestConfig](request-config).
:::

```tsx live
function Component() {
  const renderCount = useRef(0);
  // delete `isValidating`. Component count will reduce 3 to 2.
  const { data, isValidating, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts');

  const onClick = () => {
    fetcher({
      title: 'foo',
      content: 'bar',
      userId: 1,
    });
  };

  renderCount.current += 1;

  return (
    <div>
      <div>{isValidating ? 'fetching data...' : 'idle'}</div>
      <div>Last data is<pre>{JSON.stringify(data, null, 2)}</pre></div>
      <div>Component is rendered {renderCount.current} time(s)</div>
      <button onClick={onClick}>Upload</button>
    </div>
  );
}
```
This example just added `isValidating` to the example above. However, the number of renderings increased. `use-request` trace where properties are used and only re-renders the component when the used properties are updated.
If you don't use isValidating in this example, the component will be rendered twice.
