---
id: start
title: 시작
---

# 시작
이 라이브러리는 React를 사용하는 프로젝트에서 사용 가능합니다.

## 빠른 시작
`useRequest`를 사용하기 전에, `useRequest`를 사용할 컴포넌트를 만들어줍니다.
```tsx
const Component = () => {
  return (
    <div>
      <div>Data</div>
      <button>업로드</button>
    </div>
  );
};
```

그 다음 일반적인 RESTful한 API를 사용중이라면 아래와 같이 `useRequest`를 사용합니다.
```tsx
function Component() {
  const { data } = useRequest();
  
  return (
    <div>
      <div>{data}</div>
      <button>업로드</button>
    </div>
  );
}
```

그 다음 **request**를 보낼 URL을 작성합니다
```tsx
function Component() {
  const { data } = useRequest('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <div>{data}</div>
      <button>업로드</button>
    </div>
  );
}
```

그리고 버튼을 클릭하면 특정 요청을 보내게 합니다.
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
      <button onClick={onClick}>업로드</button>
    </div>
  );
}
```

이게 다입니다. `useRequest`는 이렇게나 사용하기 간편합니다. 이뿐만이 아닙니다.

```tsx live
(() => {
const url = 'https://jsonplaceholder.typicode.com/posts';
let count = 0;
let childCount = 0;

const Child = () => {
  const { error, fetcher } = useRequest(url);

  const onClick = () => {
    fetcher({
      title: 'foo',
      content: 'bar',
      userId: 1,
    });
  };

  childCount += 1;

  return (
    <div>
      {error && '오류가 나버렸네요...'}
      Child는 {childCount}번 리렌더링 되었습니다.
      {!error && <button onClick={onClick}>실행</button>}
    </div>
  );
};

const Parent = () => {
  const { data } = useRequest(url);

  count += 1;

  return (
    <div>
      <div>마지막으로 가져온 데이터는 <pre>{JSON.stringify(data, null, 2)}</pre>입니다</div>
      <div>Parent는 {count}번 데이터를 가져왔습니다.</div>
      <Child />
    </div>
  );
};

return Parent;
})()
```
예제 처럼 다른 컴포넌트이지만 같은 URL을 사용하고 있다면 그 값이 **동기화**됩니다. 또한 `Parent` 컴포넌트의 총 렌더링 횟수는 `data`가 변경된 횟수입니다. 여기서  `use-request`의 특징이 드러납니다. `useRequest`는 오직 사용한 프로퍼티가 업데이트 되어야 리렌더링을 발생시킵니다. `Child`컴포넌트의 렌더링 횟수와 `Parent`컴포넌트의 렌더링 횟수를 비교하면 차이를 확인할 수 있습니다.

:::info
물론 **URL**이 같지만 개별적으로 **request**를 보낼 수도 있습니다. `use-request`도 그 점을 잘 알기 때문에 [cache](options#cache) 옵션과 [RequestConfig](request-config)를 지원하고 있습니다.
:::
