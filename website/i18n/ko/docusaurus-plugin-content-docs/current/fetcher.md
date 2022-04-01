---
id: fetcher
title: Fetcher
---

# Fetcher
`Fetcher`는 실제로 `request`를 전송하는 함수입니다. `use-request`는 기본적으로 **Built-in** `Fetcher`가 존재하기 때문에 [이전 예시](start)에서는 `fetcher`를 바로 사용할 수 있었습니다. 하지만 기본 `fetcher`는 범용성있지 못합니다. 따라서 `use-request`에서는 `Fetcher`를 커스텀할 수 있도록 합니다.

```tsx
const { data, fetcher } = useRequest(url);
```
우리는 지금까지 `useRequest`를 위와 같이 사용하였습니다. 하지만 만약에 `response`로 JSON 데이터가 아닌, 그냥 text를 받고 싶다면 어떻게 해야할까요?

## 기본

먼저, 그냥 text를 받는 함수를 만들어보겠습니다
```tsx
const textFetcher = async () => {
  const response = await fetch(url);

  return response.text();
};
```
간단하게 [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)를 이용하여 response를 텍스트로 받는 함수를 만들었습니다.

여기서 url을 `textFetcher`함수의 인자로 넣어봅시다.
```tsx {1}
const textFetcher = async (url) => {
  const response = await fetch(url);

  return response.text();
};
```
이렇게 만든 `textFetcher` 함수는 `await textFetcher(URL);`과 같이 호출하면 text를 반환합니다. 자 이제 이걸 `useRequest`에게 줘봅시다.

```tsx
const { data, fetcher } = useRequest(url, { fetcher: textFetcher });
```
끝났습니다. 이렇게 `fetcher`라는 키에 `textFetcher`를 그저 전달하기만 하면 됩니다. 이제 `data`는 `string`이 됩니다.

## 데이터 전달하기

하지만 이대로는 부족합니다. 우리는 일반적으로 `POST` 요청을 보낼때에는 어느곳이라도 데이터를 담아야 합니다. 우리가 위에서 만든 `textFetcher`는 추가적인 데이터를 보낼 수는 없습니다. 그럼 `textFetcher`를 아래와 같이 수정해보는건 어떨까요?
```tsx {1,3-7}
const textFetcher = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.text();
};
```
이렇게 수정하게 되면, `textFetcher`를 호출할때 데이터를 추가적으로 보낼 수 있습니다. 그리고 `useRequest`또한 데이터를 보낼수 있게 됩니다.
```tsx
const { data, fetcher } = useRequest(url, { fetcher: textFetcher });
// ...
fetcher({ data: 'test' });
```
`fetcher`를 호출할때 `object`를 전달하는 것을 주의깊게 보세요. `fetcher`에 넣은 인자는 `textFetcher`의 두번째 인자와 동일합니다.

그렇다면 이렇게 바꾸면 어떨까요?
```tsx {1,3,17}
const textFetcher = async (url, body, method) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.text();
};

/* ---------- */

const { data, fetcher } = useRequest(url, { fetcher: textFetcher });
// ...
fetcher({ data: 'test' }, 'POST');
```

우리가 예상한대로 동작합니다! `textFetcher`의 `method`에는 `'POST'`라는 값이 전달됩니다.

마지막으로 이렇게 함수를 더 고쳐도 동작할까요?

```tsx {1,3,7,18}
const textFetcher = async (url, body, method = 'POST', headers = {}) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  return response.text();
};

/* ---------- */

const { data, fetcher } = useRequest(url, { fetcher: textFetcher });
// ...
fetcher({ data: 'test' }, 'POST', { Authorization: `bearer ${token}` });
```
`defaultParameter`또한 동작합니다. 잊지마세요. `useRequest.fetcher`의 인자를 옵션으로 넣는 `fetcher`의 첫번째 인자를 제외한 모든 인자는 **동일하게** 동작합니다.

그리고 지금 우리가 구현한 `textFetcher`에서 마지막 `return response.text();`를 `return response.json();`으로 바꾸게 되면 `use-request`가 제공하는 기본 `fetcher`가 됩니다.
