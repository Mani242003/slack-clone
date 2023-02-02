import React from 'react'
import  "./Message.css"

const  Message= ({message,timeStamp,user,userImage}) => {
  return (
    <div className='message' >
    <img src={userImage} />
    <div className='messageInfo'>
    <h4>{user}{" "}<span className='message__timeStamp' >
    {new Date(timeStamp?.toDate()).toLocaleString()}
    </span></h4>
    <p>{message}</p>
    </div>
      
    </div>
  )
}

export default Message
