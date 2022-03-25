# use-request
Zero dependency data fetch library for React

# Installation
`$ npm install use-request`

# Usage
```ts
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

# API
Go to [Document](docs/api.md)
