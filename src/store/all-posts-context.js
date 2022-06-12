import { API } from "aws-amplify";
import { createContext, useState } from "react";
import * as mutations from '../graphql/mutations'

const AllPostsContext = createContext({
  posts: [],
  isLoading: true,
  addLike: (postId) => {},
  getIsLoading: () => {},
  initializePosts: (posts) => {}
})

export function AllPostsContextProvider(props) {
  const [posts, setAllPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  function initializePostsHandler(posts) {
    setAllPosts(() => {return (posts)})
  }

  function getPostsHandler() {
    return posts
  }
  
  function setIsLoadingHandler(isLoading) {
    setIsLoading(isLoading)
  }

  function getIsLoadingHandler() {
    return isLoading
  }
  
  function getPostById(postId) {
    return posts.find(post => post.id === postId)
  }



  async function addLikeHandler(postId) {
    const post = getPostById(postId)
    delete post.updatedAt
    delete post.createdAt
    post.likes++

    const updatedPost = await API.graphql({query: mutations.updatePost, variables: {input: getPostById(postId)}}).catch((error) => console.log(error))
    let newPosts = posts

    newPosts = newPosts.map(post => {
      if (post.id === postId)
        return updatedPost.data.updatePost
      else
        return post
    })
    setAllPosts(() => {
      return newPosts.sort((a, b) => {
        return ('' + b.createdAt).localeCompare(a.createdAt)
      })
    })
    

  }

  const context = {
     addLike: addLikeHandler,
     getIsLoading: getIsLoadingHandler,
     initializePosts: initializePostsHandler,
     setIsLoading: setIsLoadingHandler,
     getPosts: getPostsHandler
  }

  return (
    <AllPostsContext.Provider value={context}>
      {props.children}
    </AllPostsContext.Provider>
  )
}
export default AllPostsContext;