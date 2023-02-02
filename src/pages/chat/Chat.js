import React,{useState,useEffect} from 'react';
import "./Chat.css"
import {db} from "../../firebase"
import {useParams} from "react-router-dom"
import {
  collection,
  doc,onSnapshot,orderBy,query

} from "firebase/firestore"
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import ChatInput from './chatInput/ChatInput';
import Message from './chatInput/messages/Message';

const Chat = () => {
  const {roomId}=useParams()
  const [roomDetials, setRoomDetials] = useState(null)
  const [message, setMessage] = useState([])

  useEffect(() => {
    if(roomId){
      const q=query(doc(db,"rooms",roomId));
      onSnapshot(q,(snapShot)=>{
      setRoomDetials(snapShot.data())
      })

      const messagequery=query(collection(db,"rooms",roomId,"message"),orderBy("timeStamp","asc"))
      onSnapshot(messagequery,(snapShot)=>{
        setMessage(snapShot.docs.map((doc)=>doc.data()))
      })

    }
    
  }, [roomId])

  console.log(roomDetials);

  return (
    <div className='chat'>
    <div className='chat__header' >
    <div className='chat__header__left' >
    {roomDetials?(
      <h4 className='chat__channelName' >
      <strong># {roomDetials.name}</strong>
      <StarBorderOutlined />
    
      </h4>
    ):(
      <h4>loading...</h4>
    )}

    </div>
    <div className='chat__header__right' >
    <p>
    <InfoOutlined />Details
    </p>
    </div>
    </div>  
    <div className='chat__messages' >{
      message.map((data,index)=>{
        return<Message key={index} {...data} />
      })
      
    }</div>
    <ChatInput channelId={roomId} channelName={roomDetials?.name} />
    </div>
  )
}

export default Chat
