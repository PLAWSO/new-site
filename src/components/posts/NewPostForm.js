import {useRef} from 'react';
import classes from './NewPostForm.module.css'
import Add from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'

function NewPostForm(props) {
  const bodyInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredBody = bodyInputRef.current.value

    const postData = {
      author: props.username,
      body: enteredBody,
      isEdited: false,
      likes: 0,
    }

    props.onAddPost(postData)
  }


  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1 className={classes.author}>{props.username}{props.isEdited ? " (edited)" : ''}</h1>
        <div className={classes.control}>
          <textarea
            onKeyDown={e => {
              if (e.key === 'Enter')
                e.preventDefault()
            }}
            minLength="5"
            maxLength="100"
            className={classes.body}
            required
            ref={bodyInputRef}
            placeholder='body...'>
          </textarea>
        </div>
        <div className={classes.footer}>
          <IconButton color="primary" size='large' type='submit'><Add/></IconButton>
        </div>
      </form>
    </div>
  )
}


export default NewPostForm;