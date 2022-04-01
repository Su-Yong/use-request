---
id: intro
title: use-request
---

# use-request
Zero dependency data fetch library for React

# Features
* Zero dependency
* Small bundle size (~25KB)
* Prevent useless rerender
* Support TypeScript
* Support ReactNative

# Installation
`npm install @suyongs/use-request`

or

`yarn add @suyongs/use-request`

# Usage
```tsx
interface Post {
  title: string;
  content: string;
  author: string;
}

const fetcher = async (url, body: Post): Promise<Post> => {
  const reponse = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

const Component = () => {
  const { data, fetcher } = useRequest('https://example.com/upload', { fetcher });

  const onClick = () => {
    fetcher({
      title: 'title',
      content: 'content',
      author: 'author',
    });
  }

  return (
    <div>
      {data && <div>Upload Success</div>}
      <button onClick={onClick}>Upload</button>
    </div>
  );
};
```
