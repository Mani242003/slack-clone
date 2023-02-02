import React from 'react'
import "./Login.css"
import { useDispatch } from 'react-redux'
import { setUser } from '../../Slices/UserSlices'
import {Button} from "@mui/material"
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'



const Login = () => {

  const dispatch=useDispatch()

  const handelLogin=()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
      dispatch(setUser(result.user));
    }).catch((err)=>{
      console.log(err);
  
    })
  }
  
  

  return (
    <div className='login' >
    <div className='login__container' >
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png' alt='logo' />
    <h3>
    Slack is a messaging app for business that connects people to the information they need. By bringing people together to work as one unified team, Slack transforms the way organizations communicate.</h3>
    <Button  onClick={handelLogin} >Sign in with Google</Button>
    
    </div>
    </div>
  )
}

export default Login
