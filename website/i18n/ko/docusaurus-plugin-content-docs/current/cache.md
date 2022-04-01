---
id: cache
title: 캐시
---

# Cache
`Cache`는 아래 5가지 메소드가 모두 구현되어 있어야합니다.
* `get(id: string): Data`
* `set(id: string, data: Data)`
* `delete(id: string)`
* `has(id: string): boolean`
* `clear()`

JavaScript의 `Map`은 위 5가지 조건을 모두 만족하기에 `Cache`로 사용될 수 있습니다.

> TODO
