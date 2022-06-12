import {useRef} from 'react';
import classes from './Login.module.css'
import Login from '@mui/icons-material/Login'
import IconButton from '@mui/material/IconButton'


function LoginPage(props) {
  const usernameInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredUsername = usernameInputRef.current.value

    props.setUsername(enteredUsername)
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <h1>enter a username for this session</h1>
      <input
        minLength="3" 
        maxLength="10"
        required
        type="text"
        placeholder='username...'
        ref={usernameInputRef}>
      </input>
      <br/>
      <IconButton className={classes.loginBtn} color="primary" type='submit' size='large'><Login/></IconButton>
    </form>
  )
}

export default LoginPage