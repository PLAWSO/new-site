import { createContext, useState } from "react";

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
    //console.log(posts)
    setAllPosts(() => {
      return posts
    })
  }
  
  function setIsLoadingHandler(isLoading) {
    setIsLoading(isLoading)
  }

  function postsHandler() {
    return posts
  }

  function getPosts() {
    return posts
  }

  function addLikeHandler(props) {
    console.log(props)
    console.log('finish addLikeHandler!')
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