import {useRef} from 'react';
import Card from '../ui/Card';
//import classes from './NewPostForm.module.css'

function NewPostForm(props) {
  const usernameInputRef = useRef()
  const bodyInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredUsername = usernameInputRef.current.value
    const enteredBody = bodyInputRef.current.value

    const postData = {
      author: enteredUsername,
      body: enteredBody,
      isEdited: false,
      likes: 0,
    }
    
    props.onAddPost(postData)
  }


  return (
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='username'>Username</label>
            <input type='text' required id='username' ref={usernameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='body'>Body</label>
            <textarea id='body' required rows='5' ref={bodyInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button type='submit'>Add Post</button>
          </div>
        </form>
      </Card>
    )
}

export default NewPostForm;