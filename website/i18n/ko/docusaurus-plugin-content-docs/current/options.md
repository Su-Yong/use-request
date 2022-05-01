---
id: options
title: 옵션
---

# 옵션
`useRequest`의 옵션으로 사용할 수 있는것들은 다음과 같습니다.
* `initWith?: Data | boolean`
* `cache?: Cache<State<Data, Err>> | boolean`
* `dedupingFetching?: boolean`
* `initWhenUndefined?: boolean`
* `ignoreSameValue?: boolean`
* `revalidationInterval?: number`

## initWith
`initWith` 옵션은 컴포넌트가 마운트 될때 동시에 바로 요청을 보내는 옵션입니다. `initWith`필드에 **request** 보낼 인자들을 배열로 작성하면 **fetcher**에 해당 데이터를 전달하여 **request**를 보냅니다.

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
      {!data && '데이터를 가져오는 중입니다...'}
      {data && `결과: ${data}`}
    </div>
  );
};
```

위와는 다르게, `initWith`가 `true`이면 캐시에서 데이터를 가져옵니다.

또한 `initWith`가 `false`이면 이전에 캐시된 데이터가 존재하더라도 컴포넌트가 마운트 될때 `useRequest`는 캐시된 데이터를 불러오지 않습니다.

:::caution
0.4.0 이전 버전은(0.4.0 미포함) `initWith`의 타입이 `initWith: Data | null | undefined`였습니다.
이때 `initWith`의 `null`, `undefined`는 각각 현재 `initWith`의 `false`, `true`와 1대1 대응됩니다.
:::

`initWith`를 `false`로 설정하게 되면 손해라고 생각할 수 있습니다. 하지만 다음과 같은 경우에 굉장히 큰 도움이 됩니다.

예를들어 아래와 같은 타입으로 정의된 글을 업로드 하고 수정하는 컴포넌트를 만든다고 가정합시다.

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
      {error && '오류가 났어요 새로고침 해보실래요?'}
      <UploadButton code={'TEST'} data={post} />
    </div>
  );
};
```
위와 같이 컴포넌트를 제작한 경우에는 `useRequest`의 캐싱 능력을 사용하여 두 컴포넌트가 분리되어 있더라도 동일한 결과를 받을 수 있게해야합니다. 하지만 캐시된 데이터를 가져오게 되면, 메인 컴포넌트가 **unmount** 되고 다시 **mount** 되더라도 `useRequest`의 초기 값이 비어있는것이 아니라 이전에 시도했던 **request**의 결과를 갖게 됩니다
.
따라서 `initWith: false` 옵션은, 캐싱 능력과 관계없이 컴포넌트가 마운트 될때마다 임시로 초기화 하여 특정 **request**를 사용하는 컴포넌트들의 **시작지점**을 만드는 역할을 합니다.

이보다 훨씬 복잡한 경우에는 `RequestConfig`를 이용하여 `cache`를 따로 전달하는 방식이 더 좋을 수 있습니다. 그렇지만 `RequestConfig`를 사용하기에는 너무 번거롭기 때문에 우리는 이와 같이 Shortcut을 사용할 수 있습니다.

## cache
`cache` 옵션은 서로 다른 `useRequest`간에 데이터를 동기화 할건지에 대한 여부를 설정합니다.

:::info
`cache`를 구현하는 [Cache](./cache.md)에 대한 내용은 [cache.md](./cache.md)를 확인해주세요.
:::

## dedupingFetching
`dedupingFetching` 옵션은 데이터를 불러오고 있을때, `useRequest.fetcher`를 여러번 호출하더라도 무시하는 옵션입니다.

동일한 엔드포인트에 `request`를 여러번 보내는 경우는 거의 존재하지 않습니다. 일반적으로 UI의 반응성이 느려 사용자가 여러번 요청을 하게되어 동일한 엔드포인트에 여러번 호출이 가는 경우가 대부분입니다.

`use-request`는 이러한 경우를 막을 수 있습니다. 동일한 요청을 보내는것을 막게되면, 백엔드의 비용도 낮아지게 됩니다. 따라서 `use-request`는 이 옵션을 기본값으로 `true`로 설정하고 있습니다.

이때 실제로 이 옵션으로 호출을 무시하려면 아래와 같은 조건을 **모두** 만족해야합니다.
1. 동일한 `id`의 `request`가 존재한다.
1. 해당 `request`가 `isValidating`이 `true`인 상태이다.

위의 두 조건에 만족했을때. `use-request`는 사용자가 요청한 fetch를 **무시**합니다. 

## initWhenUndefined
`initWhenUndefined`옵션은 `initWith` 옵션과 함께 이용됩니다.
`initWith`옵션을 이용하여 컴포넌트가 마운트 되자말자 `request`를 전송할때, `data`의 존재 유무에 따라 `request`를 억제할 수 있습니다.

예를들어
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
위와 같은 경우에는 `Child`컴포넌트가 추가되더라도 **단 한번**의 `request`만 발생합니다. 만약 `initWhenUndefined`를 `false`로 바꾼다면, `Child` 컴포넌트가 마운트 될때마다 요청을 보냅니다.

## ignoreSameValue
`ignoreSameValue` 옵션은 `request`의 응답이 현재 `data`, `error`와 동일하면 리렌더링을 하지 않는 옵션입니다.

```tsx live
function Component() {
  const renderCount = useRef(0);
  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts', {
    ignoreSameValue: false,
  });

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
      <div>Component는 {renderCount.current}번 렌더링 되었습니다.</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onClick}>업로드</button>
    </div>
  );
}
```
위 예제는 업로드 버튼을 눌렀을때 지속적으로 렌더링 횟수가 올라갑니다 하지만 아래와 같이

```tsx live
function Component() {
  const renderCount = useRef(0);
  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts', {
    ignoreSameValue: true,
  });

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
      <div>Component는 {renderCount.current}번 렌더링 되었습니다.</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onClick}>업로드</button>
    </div>
  );
}
```

`ignoreSameValue`옵션이 `true`인 경우에는 업로드를 계속 눌러도 렌더링 횟수가 2회 이상으로 올라가지 않습니다.

## revalidationInterval
`revalidationInterval`옵션은 마지막으로 가져온 데이터가 `revalidationInterval`만큼의 시간안이면 새 데이터를 가져오지 않고 마지막으로 가져온 데이터를 재사용합니다.

이때 `revalidationInterval`은 `miliseconds`단위 입니다.

:::caution
`revalidationInterval`이 0이하인 경우는 이전 데이터를 확인하지 않고 항상 새 데이터를 요청합니다.
:::
