import {Link} from 'react-router-dom';
//import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
  <header className={classes.header}>
    <div className={classes.logo}>plawso.xyz</div>
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