---
id: options
title: Options
---

# Options
The options available for `useRequest`.
* `initWith?: Data | boolean`
* `cache?: Cache<State<Data, Err>> | boolean`
* `dedupingFetching?: boolean`
* `initWhenUndefined?: boolean`
* ~~`UNSTABLE__suspense?: boolean`~~ (SOON)

## initWith
The `initWith` option sends a request immediately when the component is mounted. If you write the arguments to send **request** in the `initWith` field as an array, you send the **request** by passing the data to **fetcher**.

```tsx
const Component = () => {
  const { data } = useRequest(url, {
    initWith: [
      {
        userId: 'userId',
        actionType: 3,
      }
    ],
    fetcher,
  });

  return (
    <div>
      {!data && 'Fetching data...'}
      {data && `Result: ${data}`}
    </div>
  );
};
```
Contrary to the above, if `initWith` is `true`, `useRequest` try to get a value from cache.

Also, `initWith` is `false`, `useRequest` does not load cached data when the component is mounted even if preivously cached data exists.

:::caution
before 0.4.0 (exclude 0.4.0), type of `initWith` is `initWith: Data | null | undefined`;
Old version's `null`, `undefined` value correspond current version's `false`, `true` value.
:::

You might think that putting this `false' value is useless, but for a set of components, it works very well.

For example, you want to create a component that uploads and edits a post defined as the following type.

```tsx title="src/Post.ts"
interface Post {
  title: string;
  author: string;
  content: string;
}
```

```tsx title="src/Main.tsx"
const UploadButton = ({ code, data }) => {
  const [captcha, setCaptcha] = useState('');
  const { fetcher, isValidating } = useRequest(url, options);

  const onClick = () => {
    if (captcha === code) {
      fetcher(data);
    }
  };

  return (
    <div>
      <input value={captcha} onChange={({ target }) => setCaptcha(target.value)}/>
      <button disabled={isValidating} onClick={onClick}>Upload</button>
    </div>
  )
};

const PostPage = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    content: '',
  });
  const { error } = useRequest(url, {
    ...options,
    initWith: false,
  });

  return (
    <div>
      {!error && (
        <>
          <input value={post.title} onChange={({ target }) => setPost((it) => ({ ...it, title: target.value }))} />
          <input value={post.author} onChange={({ target }) => setPost((it) => ({ ...it, author: target.value }))} />
          <input value={post.content} onChange={({ target }) => setPost((it) => ({ ...it, content: target.value }))} />
        </>
      )}
      {error && 'Error! try refresh'}
      <UploadButton code={'TEST'} data={post} />
    </div>
  );
};
```
If you create a component as above, you should use the caching ability of `useRequest` so that the same result can be received even if the two components are separated. However, when the cached data is fetched, even if the main component is **unmounted** and **mounted** again, the initial value of `useRequest` is not empty, but the result of the previously attempted **request**.

Therefore, the `initWith: false` option serves to create a **start point** for components that use a specific **request** by temporarily initializing them whenever a component is mounted, regardless of caching capabilities.

In a much more complex case, it may be better to provide a new [`Cache`](cache) object using `RequestConfig`. But since `RequestConfig` is too complex, we can use Shortcut like this.

## cache
The `cache` option sets whether or not to synchronize data between different `useRequest`.

:::info
For information on [Cache](./cache.md) implementing `cache`, please check [cache.md](./cache.md).
:::

## dedupingFetching
The `dedupingFetching` option is an option to ignore even if `useRequest.fetcher` is called multiple times when data is being fetched.

Sending a `request' multiple times to the same endpoint is rare. In general, the user makes multiple requests due to the slow response of the UI.

`use-request` can prevent this case. Avoiding sending the same request also lowers the cost of the backend. So `use-request` is setting this option to `true` by default.

In this case, in order to actually ignore the call with this option, **all** of the conditions below must be satisfied.
1. A `request` with the same `id` exists.
1. The corresponding `request` is in a state where `isValidating` is `true`.

When the above two conditions are satisfied. `use-request` will **ignore** any fetch requested by the user.

## initWhenUndefined
The `initWhenUndefined` option is used with the `initWith` option.
When sending a `request` as soon as the component is mounted using the `initWith` option, you can suppress `request` according to the existence of `data`.

For example
```tsx title="src/Child.tsx"
const Child = () => {
  const { data } = useRequest(url, {
    initWith: [],
    initWhenUndefined: true,
  });

  return (
    <div>
      {data}
    </div>
  )
};

export default Child;
```
```tsx title="src/Component.tsx"
import Child from './Child';

const Component = () => {
  const [count, setCount] = useState(1);
  
  return (
    <div>
      {Array.from({ length: count }).map((_, index) => (
        <Child key={index} />,
      ))}
      <button onClick={() => setCount((it) => it + 1)}>추가</button>
    </div>
  );
};
```
In the above case, even if the `Child` component is added, only **ONE** `request` occurs. If you change `initWhenUndefined` to `false`, a request will be sent whenever the `Child` component is mounted.

## UNSTABLE__suspense
:::info
`UNSTABLE__suspense` is not yet implemented. This option was created to support React Suspense in the future.
:::