import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
import StickyBox from "react-sticky-box"
import IconButton from '@mui/material/IconButton';
import DynamicFeed from '@mui/icons-material/DynamicFeed'
import PostAdd from '@mui/icons-material/PostAdd'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

function MainNavigation() {
  return (
  <StickyBox className={classes.header}>
    <nav>
      <ul>
        <li>
          <IconButton color="primary" size='large' component={Link} to='/'>
            <DynamicFeed />
          </IconButton>
        </li>
        <li>
          <IconButton color="primary" size='large' component={Link} to='/new-post'>
            <PostAdd />
          </IconButton>
        </li>
        <li>
          <IconButton color="primary" size='large' component={Link} to='/top-posts'>
            <StarBorderRoundedIcon />
          </IconButton>
        </li>
      </ul>
    </nav>
  </StickyBox>
  );
}


export default MainNavigation;