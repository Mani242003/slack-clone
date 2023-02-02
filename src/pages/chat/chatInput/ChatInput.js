import { addDoc, collection } from 'firebase/firestore';
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { db,timeStamp } from '../../../firebase';
import "./ChatInput.css"
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({channelName,channelId}) => {
    const [input, setInput] = useState("")
    const user=useSelector((state)=>state.userInfo.user);

    const sendMessage= async(e)=>{
        e.preventDefault();
        if(channelId){
            await addDoc(collection(db,"rooms",channelId,"message"),{
                message:input,
                timeStamp,
                user:user.displayName,
                userImage:user.photoURL,

            })
        }
        setInput("")
    }
    

  return (
    <div className='chatInput'>
    <form>
    <div className='form__items' >
    <input type="text"
    onChange={(e)=> setInput(e.target.value)}
    value={input}
    placeholder="type here"
     />
     <button type="submit" onClick={sendMessage} ><SendIcon  /> </button>
     </div>
    </form>
      
    </div>
  )
}

export default ChatInput
