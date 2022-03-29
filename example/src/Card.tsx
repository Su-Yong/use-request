import { useCallback } from 'react';
import { mergeOptions, useRequest } from 'use-request';
import { Post, User, PostComment } from './types';
import { Options, server } from './utils';

const containerStyle: React.CSSProperties = {
  borderRadius: 8,
  padding: 12,
  background: 'rgba(45, 45, 45, 0.1)',
  boxShadow: '0 4px 12px rgba(125, 125, 125, 0.5)',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
};

const commentContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: 4,
};

const commentStyle: React.CSSProperties = {
  borderRadius: 8,
  padding: 8,
  background: 'rgba(45, 45, 45, 0.1)',
};


const Card = ({ post }: { post: Post }): JSX.Element => {
  /*
  all Card's user data are sync
  that means useRequest send only 10 request (because 10 users exist)
  */
  const { data: user } = useRequest<User>(server`/users/${post.userId}`, mergeOptions({
    initWith: [],
    dedupingFetching: true, // this option make useRequest send only 1 request
    initWhenUndefined: true, // this option make useRequest initialize data when data is undefined
  }, Options.GET));
  const { data: comments, fetcher, isValidating } = useRequest<PostComment[]>(server`/comments?postId=${post.id}`, Options.GET);

  const onClick = useCallback(() => {
    fetcher();
  }, []);

  return (
    <div style={containerStyle}>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
      <div>{user?.username}</div>
      {!comments && <button onClick={onClick} disabled={isValidating}>View Comments</button>}
      {comments && (
        <div style={commentContainerStyle}>
          {comments.map((comment) => (
            <div key={comment.id} style={commentStyle}>
              {comment.body}
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default Card;
