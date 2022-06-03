import {useNavigate} from 'react-router-dom'
import NewPostForm from "../components/posts/NewPostForm";
import {createPost} from '../graphql/mutations'
import {API, graphqlOperation} from 'aws-amplify';

function NewPostPage() {
  const navigate = useNavigate()
  
  const addPostHandler = async postData => {
    await API.graphql(graphqlOperation(createPost, {input: postData}))
      .then(() => {
        navigate("/", { replace: true });
      })
  }


  return (
    <section>
      <h1>Add New Post</h1>
      <NewPostForm onAddPost={addPostHandler}/>
    </section>
  )
}


export default NewPostPage;