# use-request
Zero dependency data fetch library for React

# Features
* Zero dependency
* Support TypeScript
* Prevent useless rerender

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

const fetcher = (url, body) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

const Component = () => {
  const { data, fetcher } = useRequest<Post, Error, [Post]>('https://example.com/upload', { fetcher });

  const onClick = () => {
    fetcher({
      title: 'title',
      content: 'content',
      author: 'author',
    });
  }

  return (
    <div>
      {data && <div>upload success</div>}
      <button onClick={onClick}>Upload</button>
    </div>
  );
};
```

# [Document](docs/index.md)
Go to [Document](docs/index.md)

# [Contributors](https://github.com/Su-Yong/use-request/contributors)
|[Su-Yong](https://github.com/Su-Yong)|
|---|
|<img width="100px" height="100px" src="https://github.com/Su-Yong.png"/>|
