---
id: fetcher
title: Fetcher
---

# Fetcher
`Fetcher` is actually a function that sends a `request`. Since `use-request` has **Built-in** `Fetcher` by default, `fetcher` can be used directly in [previous example](start). But the default `fetcher` is not universal. So, `use-request` allows you to customize `Fetcher`.
```tsx
const { data, fetcher } = useRequest(url);
```
we have used `useRequest` as above. But what if you want to receive response as text instead of JSON?

## Basic

First, let's create a function that just receives text.
```tsx
const textFetcher = async () => {
  const response = await fetch(url);

  return response.text();
};
```
I made a function that simply uses [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) to get the response as text.

Let's put the url as an argument to the `textFetcher` function.
```tsx {1}
const textFetcher = async (url) => {
  const response = await fetch(url);

  return response.text();
};
```
The `textFetcher` function created in this way returns text when called like `await textFetcher(URL);`. Now let's provide this to `useRequest`.

```tsx
const { data, fetcher } = useRequest(url, { fetcher: textFetcher });
```
We made it. Just pass `textFetcher` to the key `fetcher` like this. Now `data` becomes `string`.

## Passing Data

But this is not enough. We usually have to put data somewhere when we send a `POST` request. The `textFetcher` we created above cannot send any additional data. Then how about editing `textFetcher` like this?
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
Editing like above, additional data can be sent when calling `textFetcher`. And `useRequest` will also be able to send data.

```tsx
const { data, fetcher } = useRequest(url, { fetcher: textFetcher });
// ...
fetcher({ data: 'test' });
```
Pay attention to passing `object` when calling `fetcher`. The argument you put in `fetcher` is the same as the second argument in `textFetcher`.

So, how about changing it like this?
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
It works as we expected! The value `'POST'` is passed to the `method` of `textFetcher`.

Finally, would it still works even if change the function like this?
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
`defaultParameter` also works. Do not forget it. All arguments **same** except for the first argument of `fetcher`, which takes the argument of `useRequest.fetcher` as an option.

And if we replace `return response.text();` as `return response.json();` in the `textFetcher`, it becomes the default `fetcher` provided by `use-request`.
