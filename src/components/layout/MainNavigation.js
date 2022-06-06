import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
//import SaveIcon from '@material-ui/icons/Save'

function MainNavigation() {
  return (
  <header className={classes.header}>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Posts</Link>
        </li>
        <li>
          <Link to='/new-post'>Add New Post</Link>
        </li>
        <li>
          <Link to='/top-posts'>Top Posts</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
}


export default MainNavigation;