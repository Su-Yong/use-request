import { useCallback, useState } from 'react';
import { useRequest } from 'use-request';
import Card from './Card';
import { Post } from './types';
import { Options, server } from './utils';

const appStyle: React.CSSProperties = {
  maxWidth: 640,
};

const fullStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: 8,
};

function App() {
  const { data, error, isValidating, fetcher } = useRequest<Post[]>(server`/posts`, {
    ...Options.GET_MUTATE,
    initWith: [''],
  });

  const [userId, setUserId] = useState('');

  const onClick = useCallback(() => {
    if (Number.isFinite(Number(userId))) {
      fetcher(`?userId=${userId}`);
    } else fetcher('');
  }, [userId]);

  return (
    <div style={appStyle}>
      <input value={userId} type={'number'} onChange={({ target }) => setUserId(target.value)} />
      <button onClick={onClick}>load by userId</button>
      {isValidating && <div style={fullStyle}>loading...</div>}
      {error && <div style={fullStyle}>{error.name}: {error.message}</div>}
      {data && (
        <div style={containerStyle}>
          {data.map((post) => <Card key={post.id} post={post} />)}
        </div>
      )}
    </div>
  )
}

export default App
