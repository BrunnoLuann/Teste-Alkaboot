import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PostListContainer, PostCard, } from './PostListPageStyled';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <PostListContainer>
      {posts.map(post => (
        <PostCard key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}/comments`}>Comentários</Link>
        </PostCard>
      ))}
    </PostListContainer>

  );
}

export default PostList;


