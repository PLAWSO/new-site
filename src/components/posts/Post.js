import classes from './Post.module.css';
import { useContext } from 'react';
import AllPostsContext from '../../store/all-posts-context';
import IconButton from '@mui/material/IconButton';
import ThumbUp from '@mui/icons-material/ThumbUp'

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
        <IconButton color="primary" size='large' className={classes.likeButton} onClick={addLikeHandler}><ThumbUp /></IconButton>
        <p className={classes.likeCounter}>{props.likes}</p>
      </div>
    </li>
  );
}

export default PostItem;