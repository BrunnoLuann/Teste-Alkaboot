import { useState, useEffect } from 'react';
import axios from 'axios';
import { CommentsContainer, CommentCard } from './CommentsStyled';

function PostComments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}/comments`)
      .then(response => setComments(response.data))
      .catch(error => console.log(error));
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Comentários do Post</h1>
      <CommentsContainer>
        {comments.map(comment => (
          <CommentCard key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </CommentCard>
        ))}
      </CommentsContainer>
    </div>
  );
}

export default PostComments;
