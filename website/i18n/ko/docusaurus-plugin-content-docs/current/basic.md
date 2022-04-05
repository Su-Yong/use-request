---
id: start
title: 시작
---

# 시작
이 라이브러리는 React를 사용하는 프로젝트에서 사용 가능합니다.

## 빠른 시작
`useRequest`를 사용하기 전에, `useRequest`를 사용할 컴포넌트를 만들어줍니다.
```tsx
function Component() {
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
      <div>마지막으로 가져온 데이터는 <pre>{JSON.stringify(data, null, 2)}</pre>입니다</div>
      <div>Component는 {renderCount.current}번 렌더링 되었습니다.</div>
      <button onClick={onClick}>업로드</button>
    </div>
  );
}
```
이 예시는 데이터를 가져오지 않았는데도, 이미 데이터가 있습니다. 그 이유는 바로 이 예시 위에 있던 업로드 버튼을 눌렀기 때문입니다.

`use-request`는 동일한 URL일 경우에 값을 **동기화**합니다.  그렇기 때문에 이 예시는 버튼을 누르지 않아도 데이터가 존재합니다. 혹시 위 예제에서 버튼을 누르지 않았다면 두 예시중 아무버튼이나 누르고 결과를 확인해보세요. 두 예시에 있는 `data`가 서로 연동됩니다.

:::info
물론 동일한 **URL**이지만 서로 다른 **request**를 보낼 수도 있습니다. 이럴때는 [cache](options#cache) 옵션과 [RequestConfig](request-config)를 사용하면 됩니다.
:::

```tsx live
function Component() {
  const renderCount = useRef(0);
  // isValidating을 지워보세요 컴포넌트 카운트 횟수가 3회에서 2회로 줄어듭니다.
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
      <div>{isValidating ? '데이터 가져오는 중...' : 'idle'}</div>
      <div>마지막으로 가져온 데이터는 <pre>{JSON.stringify(data, null, 2)}</pre>입니다</div>
      <div>Component는 {renderCount.current}번 렌더링 되었습니다.</div>
      <button onClick={onClick}>업로드</button>
    </div>
  );
}
```
이 예시는 위의 예시에 `isValidating`만 추가했습니다. 그러나 렌더링 횟수가 증가하였습니다. `use-request`는 사용한 프로퍼티를 추적하여 사용한 프로퍼티가 업데이트 되었을때만 컴포넌트를 리렌더링합니다.
만약 이 예시에서 isValidating을 사용하지 않는다면 컴포넌트 렌더링 횟수는 2회가 될것입니다.
