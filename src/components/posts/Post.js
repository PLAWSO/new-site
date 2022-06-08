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
      <div className={classes.header}>
        <h3>{props.author}{props.isEdited ? " (edited)" : ""}</h3>
      </div>
      <div className={classes.body}>
        <p>{props.body}</p>
      </div>
      <div className={classes.footer}>
        <button className={classes.likeButton} onClick={addLikeHandler}>Like</button>
        <p className={classes.likeCounter}>{props.likes}</p>
      </div>
      <div className={classes.clearFix}></div>
    </li>
  );
}

export default PostItem;