---
id: start
title: Start
---

# Start
This library is available for React Project

## Quick Start
Before using `useRequest`, create a component used `useRequest`.
```tsx
const Component = () => {
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
const Component = () => {
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
  const { data } = useRequest('https://api.example.com/upload');

  return (
    <div>
      <div>{data}</div>
      <button>Upload</button>
    </div>
  );
};
```

And make button send specific request
```tsx
const Component = () => {
  const { data, fetcher } = useRequest('https://api.example.com/upload');

  const onClick = () => {
    fetcher({
      myData: 'value',
    });
  };

  return (
    <div>
      <div>{data}</div>
      <button onClick={onClick}>Upload</button>
    </div>
  );
};
```

That's all. `useRequest` is so easy to use. Not only this.

```tsx
const url = 'https://api.example.com/upload';

const Child = () => {
  const { error, fetcher } = useRequest(url);

  const onClick = () => {
    fetcher({
      input: Math.random(),
    });
  };

  return (
    <div>
      {error && 'Error'}
      {!error && <button onClick={onClick}>Submit</button>}
    </div>
  );
};

let count = -1;
const Parent = () => {
  const { data } = useRequest(url);

  count += 1;

  return (
    <div>
      <div>Last data is "{data}"</div>
      <div>data is provided {count} times</div>
      <Child />
    </div>
  )
};
```
As in the example, if they are different components but use the same URL, their values will be synchronized. Also, the total number of renderings of the `Parent` component is the number of times `data` has been changed. This is where the nature of `use-request` comes into play. `useRequest` only triggers a re-render when the used property is updated.

:::info
Of course you can also send the **request** individually even if the **URL** is the same. `use-request` is well aware of that, so it supports the [cache](options#cache) option and [RequestConfig](request-config).
:::
