import {useContext,useState, useEffect} from 'react';
import PostList from '../components/posts/PostList';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../graphql/queries'
import './AllPosts.module.css'
import  '../store/all-posts-context';
import AllPostsContext from '../store/all-posts-context';
import '../webpack.config.js'

function AllPostsPage() {
  const AllPostsCtx = useContext(AllPostsContext)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      //console.log(postList)
      const postData = await API.graphql(graphqlOperation(listPosts))
      const postList = postData.data.listPosts.items
      AllPostsCtx.initializePosts(postList)
      AllPostsCtx.setIsLoading(false)
    } catch (error) {
      console.log('error fetching posts', error)
    }
  }

  //console.log(AllPostsCtx.posts)
  if (AllPostsContext.isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  } else {
    return (
      <section>
        <h1>All Posts</h1>
        <PostList /> 
      </section>
    );   
  }  
}

export default AllPostsPage;