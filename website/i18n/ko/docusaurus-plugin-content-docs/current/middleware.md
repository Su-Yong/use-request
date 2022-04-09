---
id: middleware
title: 🚧 Middleware
---

# 🚧 Middleware
:::warning
`middleware` 기능은 아직 완벽하지 않습니다.
:::

## 생성

`middleware`는 아래와 같이 만듭니다
```tsx
const middleware = createMiddleware((state) => {
  console.log('request 보내기 전', state);
});
```

만약 `request`를 보낸 후에 특정 함수를 실행하고 싶다면 아래와 같이 실행할 함수를 반환합니다.
```tsx
const middleware = createMiddleware(() => {
  return (state) => {
    console.log('request 보낸 후', state);
  };
});
```

물론 전과 후를 동시에 쓰는것도 가능합니다.
```tsx
const middleware = createMiddleware((before) => {
  console.log('request 보내기 전', before);

  return (after) => {
    console.log('request 보낸 후', after);
  };
});
```

## 사용

`middleware`를 사용하기 위해선 우선 `RequestConfig`를 사용해야합니다. `RequestConfig`에 감쌀때, `middleware`라는 키로 `middleware`을 전달하면 됩니다.
```tsx
<RequestConfig
  middleware={yourMiddleware}
>
  <Component />
</RequestConfig>
```

물론 여러가지 `middleware`를 동시에 사용할 수 있습니다.
```tsx
<RequestConfig
  middleware={[middleware1, middleware2]}
>
  <Component />
</RequestConfig>
```
이때 `middleware2`와 `middleware1`의 관계는 아래와 같습니다.

```
start middleware 2
  start middleware 1
    useRequest
  end middleware 1
end middleware 2
```
