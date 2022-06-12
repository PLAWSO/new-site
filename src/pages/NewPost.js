import {useNavigate} from 'react-router-dom'
import NewPostForm from "../components/posts/NewPostForm";
import {createPost} from '../graphql/mutations'
import {API, graphqlOperation} from 'aws-amplify';
import classes from './NewPost.module.css';

function NewPostPage(props) {
  const navigate = useNavigate()
  
  const addPostHandler = async postData => {
    await API.graphql(graphqlOperation(createPost, {input: postData}))
      .then(() => {
        navigate("/", { replace: true });
      })
  }


  return (
    <NewPostForm username={props.username} onAddPost={addPostHandler}/>
  )
}


export default NewPostPage;