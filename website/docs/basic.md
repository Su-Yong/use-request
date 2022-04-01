---
id: start
title: Start
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
const Component = () => {
  const { data } = useRequest();
  
  return (
    <div>
      <div>{data}</div>
      <button>업로드</button>
    </div>
  );
};
```

그 다음 **request**를 보낼 URL을 작성합니다
```tsx
const Component = () => {
  const { data } = useRequest('https://api.example.com/upload');

  return (
    <div>
      <div>{data}</div>
      <button>업로드</button>
    </div>
  );
};
```

그리고 버튼을 클릭하면 특정 요청을 보내게 합니다.
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
      <button onClick={onClick}>업로드</button>
    </div>
  );
};
```

이게 다입니다. `useRequest`는 이렇게나 사용하기 간편합니다. 이뿐만이 아닙니다.

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
      {error && '오류가 나버렸네요...'}
      {!error && <button onClick={onClick}>실행</button>}
    </div>
  );
};

let count = -1;
const Parent = () => {
  const { data } = useRequest(url);

  count += 1;

  return (
    <div>
      <div>마지막으로 가져온 데이터는 "{data}"입니다</div>
      <div>{count}번 데이터를 가져왔습니다.</div>
      <Child />
    </div>
  )
};
```
예제 처럼 다른 컴포넌트이지만 같은 URL을 사용하고 있다면 그 값이 **동기화**됩니다. 또한 `Parent` 컴포넌트의 총 렌더링 횟수는 `data`가 변경된 횟수입니다. 여기서  `use-request`의 특징이 드러납니다. `useRequest`는 오직 사용한 프로퍼티가 업데이트 되어야 리렌더링을 발생시킵니다.

> 물론 **URL**이 같지만 개별적으로 **request**를 보낼 수도 있습니다. `use-request`는 그점을 이해하고 있기때문에 [cache](./options.md#cache) 옵션과 [RequestConfig](./request-config.md)를 지원하고 있습니다.
