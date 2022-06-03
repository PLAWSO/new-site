import { API } from "aws-amplify";
import { createContext, useState } from "react";
import * as mutations from '../graphql/mutations'

// context is js object
const AllPostsContext = createContext({
  posts: [],
  isLoading: true,
  addLike: (postId) => {},
  getLikes: (postId) => {},
  initializePosts: (posts) => {}
})

// reg react component, provides context to all components that listen, updates context
export function AllPostsContextProvider(props) {
  const [posts, setAllPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  function initializePostsHandler(posts) {
    setAllPosts(() => {
      return posts.sort((a, b) => {
        return ('' + b.createdAt).localeCompare(a.createdAt)
      })
    })
  }
  
  function getPosts() {
    return posts
  }
  
  function setIsLoadingHandler(isLoading) {
    setIsLoading(isLoading)
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
      if (post.id === postId){

        return updatedPost.data.updatePost
      }
      else
        return post
    })
    setAllPosts(() => {
      return newPosts.sort((a, b) => {
        return ('' + b.createdAt).localeCompare(a.createdAt)
      })
    })
  }

  function getLikesHandler() {
    console.log('finish getLikesHandler!')
  }

  const context = {
     addLike: addLikeHandler,
     getLikes: getLikesHandler,
     initializePosts: initializePostsHandler,
     setIsLoading: setIsLoadingHandler,
     getPosts: getPosts
  }

  return (
    <AllPostsContext.Provider value={context}>
      {props.children}
    </AllPostsContext.Provider>
  )
}
export default AllPostsContext;