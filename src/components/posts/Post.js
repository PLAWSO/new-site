import classes from './Post.module.css';
import { useContext } from 'react';
import AllPostsContext from '../../store/all-posts-context';

function PostItem(props) {
  const allPostsCtx = useContext(AllPostsContext)
  
  function addLikeHandler() {
    allPostsCtx.addLike(props.id)

  }

  return (
    <li className={classes.item}>
      <h1 className={classes.author}>{props.author}{props.isEdited ? " (edited)" : ""}</h1>
    
      <p className={classes.body}>{props.body}</p>
    
      <div className={classes.footer}>
        <button className={classes.likeButton} onClick={addLikeHandler}>Like</button>
        <p className={classes.likeCounter}>{props.likes}</p>
      </div>
    </li>
  );
}

export default PostItem;