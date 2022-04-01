# Fetcher
여기서 언급되는 **fetcher**는 크게 두가지 입니다.

1. `RequestOption`에 사용되는 **fetcher**
1. `useRequest`의 반환 값을 분해하여 사용되는 **fetcher**

여기서는 **1번**의 **fetcher**를 기준으로 서술하고 있습니다. **2번**의 **fetcher**를 언급할때는 `useRequest.fetcher` 라고 표기를 하겠습니다.

## **fetcher**의 타입
**fetcher**의 첫번째 인자는 항상 `url: string`으로 고정되어 있습니다. 그 다음 인자는 어떠한 인자가 와도 괜찮습니다. 실제 Type 정의는 아래와 같습니다

```tsx
interface RequestOptions<Data, FetchData extends unknown[]> {
  // ...
  fetcher?: (url: string, ...args: FetchData) => Promise<Data>;
  // ...
}
```

## RESTful의 경우
일반적으로 RESTful한 API를 사용하는 경우에는 다음과 같이 **fetcher**를 정의하는 것이 권장됩니다.

```tsx
const fetcher = async (url, body, method = 'POST', headers = {}) => fetch(url, {
  method,
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
});
```

위와 같이 사용한 경우에는 `useRequest.fetcher`는 아래와 같이 사용이 가능합니다.

```tsx
const { fetcher } = useRequest(url, options);

// ...

fetcher({
  data: 'value',
  data2: 'value',
});
```

물론 다음과 같이 사용도 가능합니다

```tsx
fetcher(
  {
    data: 'value',
    data2: 'value',
  },
  'PATCH',
  {
    Authorization: token,
  },
);
```

또한 이 **fetcher**는 현재 이 라이브러리의 기본 **fetcher** 입니다. `options`을 주지 않을 경우 위 설명에서 보였던 **fetcher**를 사용하게 됩니다.

## GraphQL의 경우
**TODO**: 곧 작성할 예정입니다.
