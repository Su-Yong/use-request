---
id: middleware
title: π§ Middleware
---

# π§ Middleware
:::warning
`middleware` κΈ°λ₯μ μμ§ μλ²½νμ§ μμ΅λλ€.
:::

## μμ±

`middleware`λ μλμ κ°μ΄ λ§λ­λλ€
```tsx
const middleware = createMiddleware((state) => {
  console.log('request λ³΄λ΄κΈ° μ ', state);
});
```

λ§μ½ `request`λ₯Ό λ³΄λΈ νμ νΉμ  ν¨μλ₯Ό μ€ννκ³  μΆλ€λ©΄ μλμ κ°μ΄ μ€νν  ν¨μλ₯Ό λ°νν©λλ€.
```tsx
const middleware = createMiddleware(() => {
  return (state) => {
    console.log('request λ³΄λΈ ν', state);
  };
});
```

λ¬Όλ‘  μ κ³Ό νλ₯Ό λμμ μ°λκ²λ κ°λ₯ν©λλ€.
```tsx
const middleware = createMiddleware((before) => {
  console.log('request λ³΄λ΄κΈ° μ ', before);

  return (after) => {
    console.log('request λ³΄λΈ ν', after);
  };
});
```

## μ¬μ©

`middleware`λ₯Ό μ¬μ©νκΈ° μν΄μ  μ°μ  `RequestConfig`λ₯Ό μ¬μ©ν΄μΌν©λλ€. `RequestConfig`μ κ°μλ, `middleware`λΌλ ν€λ‘ `middleware`μ μ λ¬νλ©΄ λ©λλ€.
```tsx
<RequestConfig
  middleware={yourMiddleware}
>
  <Component />
</RequestConfig>
```

λ¬Όλ‘  μ¬λ¬κ°μ§ `middleware`λ₯Ό λμμ μ¬μ©ν  μ μμ΅λλ€.
```tsx
<RequestConfig
  middleware={[middleware1, middleware2]}
>
  <Component />
</RequestConfig>
```
μ΄λ `middleware2`μ `middleware1`μ κ΄κ³λ μλμ κ°μ΅λλ€.

```
start middleware 2
  start middleware 1
    useRequest
  end middleware 1
end middleware 2
```
