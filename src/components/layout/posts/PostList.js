import PostItem from './Post';
//import classes from './PostList.module.css'
import AllPostsContext from '../../store/all-posts-context';
import { useContext } from 'react';


function PostList(props) {
  const AllPostsCtx = useContext(AllPostsContext)

  function addLikeHandler() {
    AllPostsCtx.addLike(props.id)
  }

  return (
    <ul className={classes.list}>
      {AllPostsCtx.getPosts().map(post => 
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
  );
}

export default PostList;