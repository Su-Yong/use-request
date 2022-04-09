---
id: typescript-basic
title: TypeScript 시작
---

# TypeScript
`use-request`는 TypeScript로 짜여져 있습니다. 따라서 모든 변수, 함수들은 타이핑 되어있습니다.

## useRequest
```tsx
// id, url 모두 'url'입니다
useRequest('url');
useRequest({ url: 'url' });

// id는 'id', url은 'url'
useRequest({ id: 'id', url: 'url' });

// 
useRequest('url', options);
useRequest({ url: 'url' }, options);
```

### Data, Error, FetchData
`useRequest`는 `options`에 포함되는 `fetcher`의 타입을 추론하여 자동으로 타입을 결정해줍니다.

예를들어
```tsx
const fetcher = async (url: string, data: unknown) => {
  return 'string';
};

const { data, error, fetcher } = useRequest('url', { fetcher });
```
위와 같이 `fetcher`를 정의한 경우는 `data`는 `string`, `error`는 `Error`, `fetcher`는 `(data: unknown) => void`로 타입이 결정됩니다.

하지만 다음 예시처럼 general한 경우에는 타입을 추론할 수 없습니다.
```tsx
const fetcher = async (url: string, data: any) => {
  const response = await fetch(url, data);

  return response.json();
};
```
위의 `fetcher`타입은 `(url: string, data: any) => Promise<any>`타입이기 때문에 `useRequest`에서는 `data: any`, `error: Error`, `fetcher: (data: any) => void`로 추론합니다. 그렇지만 우리는 위와 같은 general한 `fetcher`를 사용하는 경우가 일반적입니다. 이때 내가 `data`의 type을 정확하게 알고있다는 가정하에 다음과 같이 사용할 수 있습니다.

```tsx
const { data } = useRequest<ResponseType>('url', { fetcher });
```
이렇게 타입을 지정하면 `data`는 `ResponseType`이 됩니다. `useRequest`는 Generic함수이기 때문에 나머지 타입도 모두 설정가능합니다.
```tsx
useRequest<Data, Err, FetchData extends unknown[]>(/* ... */);
```
따라서 
```tsx title="generalFetcher.ts"
const generalFetcher = async (url: string, data: any) => {
  const response = await fetch(url, data);

  return response.json();
};
```
```tsx title="textFetcher.ts"
const textFetcher = async (url: string, data: unknown) => {
  return 'string';
};
```
`generalFetcher`를 사용하면서 `textFetcher`의 타입처럼 사용할 경우에는 아래와 같이 타입을 지정하면 됩니다.
```tsx
const { data, error, fetcher } = useRequest<string, Error, [unknown]>('url', { fetcher: generalFetcher });
```

## Options

> TODO