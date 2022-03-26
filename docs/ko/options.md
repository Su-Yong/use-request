# 옵션
`useRequest`의 옵션으로 사용할 수 있는것들은 다음과 같습니다.
* `initWith?: Data | null`
* `cache?: boolean`
* `ignoreWhenFetching?: boolean`
* ~~`UNSTABLE__suspense?: boolean`~~ (지원 예정입니다)

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

위와는 다르게, `initWith`를 생략하거나 `undefined`를 넣게 되면 캐싱된 값을 가져오게 됩니다.

또한 `initWith`에 `null`을 넣게 되면 이전에 캐시된 데이터가 존재하더라도 컴포넌트가 마운트 될때 `useRequest`는 캐시된 데이터를 불러오지 않습니다.

> `initWith`는 `null` 과 `undefined`를 다르게 인식합니다. `initWith`를 생략하는것은 `undefined`를 넣는것과 동일한 동작을 하지만, `null`과 `undefined`는 다른 동작을 수행합니다.

이 `null`값을 넣는 행위가 쓸모없다고 생각할 수 있지만 컴포넌트 집합에서 이는 굉장히 유리하게 동작합니다.

예를들어 아래와 같은 타입으로 정의된 글을 업로드 하고 수정하는 컴포넌트를 만든다고 가정합시다.

* Post.tsx
```tsx
interface Post {
  title: string;
  author: string;
  content: string;
}
```

* Main.tsx
```tsx
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
    initWith: null,
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
위와 같이 컴포넌트를 제작한 경우에는 `useRequest`의 캐싱 능력을 사용하여 두 컴포넌트가 분리되어 있더라도 동일한 결과를 받을 수 있게해야합니다. 하지만 캐시된 데이터를 가져오게 되면, 메인 컴포넌트가 **unmount** 되고 다시 **mount** 되더라도 `useRequest`의 초기 값이 비어있는것이 아니라 이전에 시도했던 **request**의 결과를 갖게 됩니다.
따라서 `initWith: null` 옵션은, 캐싱 능력과 관계없이 컴포넌트가 마운트 될때마다 임시로 초기화 하여 특정 **request**를 사용하는 컴포넌트들의 **시작지점**을 만드는 역할을 합니다.

이보다 훨씬 복잡한 경우에는 `RequestConfigProvider`를 이용하여 `StateManager`를 새로 정의해주는 방식이 더 좋을 수 있습니다. 그렇지만 `Provider`는 너무 번거롭기 때문에 우리는 이와 같이 Shortcut을 사용할 수 있습니다.

## cache
`cache` 옵션은 서로 다른 `useRequest`간에 데이터를 동기화 할건지에 대한 여부를 설정합니다.

TODO

> `cache`를 구현하는 [StateManager](./state.md)에 대한 내용은 [state.md](./state.md)를 확인해주세요.

## ignoreWhenFetching
`ignoreWhenFetching` 옵션은 데이터를 불러오고 있을때, `useRequest.fetcher`를 여러번 호출하더라도 무시하는 옵션입니다.

동시에 같은 request를 여러번 보내는 경우는 거의 존재하지 않습니다. 일반적으로 UI의 반응성이 느려 사용자가 여러번 요청을 하게되는 경우가 대부분입니다.
이 라이브러리는 UI 반응성이 느린 경우에 서버에 여러번 호출을 보내 부하를 거는 경우를 줄이기 위하여 이 옵션을 기본값으로 `true`로 설정하고 있습니다.

정말로 이 request를 병렬적으로 보낼 가능성이 있을 경우에만 `false`로 설정하는것을 추천합니다.

## UNSTABLE__suspense
`UNSTABLE__suspense`는 아직 구현되지 않은 옵션입니다. React Suspense를 지원하기 위해 만들어진 옵션입니다
