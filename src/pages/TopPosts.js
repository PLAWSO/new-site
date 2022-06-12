import {useContext, useEffect} from 'react';
import AllPostsContext from '../store/all-posts-context';
import classes from './TopPosts.module.css'
import PostList from '../components/posts/PostList';




function TopPostsPage() {
  const AllPostsCtx = useContext(AllPostsContext)

  const topPosts = AllPostsCtx.getPosts().sort((a,b) => b.likes - a.likes).slice(0,3);

  return (
    <section className={classes.section}>
      <PostList postList={topPosts}/> 
    </section>
  )
}

export default TopPostsPage;
