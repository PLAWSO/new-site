import PostItem from './Post';
import classes from './PostList.module.css'
import AllPostsContext from '../../store/all-posts-context';
import { useContext } from 'react';

function PostList(props) {
  const AllPostsCtx = useContext(AllPostsContext)

  function addLikeHandler() {
    AllPostsCtx.addLike(props.id)
  }

  if (props.postList != null) {
    return (
      <div className={classes.list}>
        <ul className = {classes.contentWindow}>
          {/*AllPostsCtx.getPosts().map(post =>*/} 
          {props.postList.map(post =>
            <PostItem
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
              isEdited={post.isEdited}
              likes={post.likes}
              createdAt={post.createdAt}
              addLike={addLikeHandler}
            />
          )}
        </ul>
      </div>
    );  
  }
}

export default PostList;