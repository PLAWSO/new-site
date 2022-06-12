import {useContext, useEffect} from 'react';
import PostList from '../components/posts/PostList';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../graphql/queries';
import classes from './AllPosts.module.css';
import  '../store/all-posts-context';
import AllPostsContext from '../store/all-posts-context';

function AllPostsPage() {
  const AllPostsCtx = useContext(AllPostsContext)

  useEffect(() => {
    fetchPosts()
    .then(() => {
      AllPostsCtx.setIsLoading(false)
    })
    .catch(e => {
      console.error(e)
    })
  }, [])

  async function fetchPosts() {
    const postData = await API.graphql(graphqlOperation(listPosts))
 
    const postList = postData.data.listPosts.items.sort((a, b) => {
      return ('' + b.createdAt).localeCompare(a.createdAt)
    })
    AllPostsCtx.initializePosts(postList)
  }

  if (AllPostsCtx.getIsLoading()) {
    return (
      <section>
        <h1 className={classes.loading}>Loading...</h1>
      </section>
    )
  } 
  else {
    return (
      <section className={classes.section}>
        <PostList postList={AllPostsCtx.getPosts()}/> 
      </section>
    )
  }  
}

export default AllPostsPage;