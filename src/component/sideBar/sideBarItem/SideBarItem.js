import React from 'react'
import "./SideBarItem.css"
import {addDoc,collection} from "firebase/firestore"
import { db } from '../../../firebase'
import { useNavigate } from 'react-router-dom'

const SideBarItem = ({Icon,titel,addChannelOption,id}) => {

   const navigate=useNavigate()

    const addChannel=async ()=>{
        const channelName=prompt("Please enter a Channel")
        if (channelName){
            await addDoc(collection(db,"rooms"),{name:channelName})
        }

    }
const selectChannel=()=>{
    if (id){
        navigate(`/room/${id}`)
    }else{
        navigate("/")
    }

}

  return (
    <div className='SideBarItem' onClick={addChannelOption? addChannel : selectChannel} >
    {
        Icon && <Icon  className='SideBar__icon'  />
    }
    {
        Icon?(
            <h3>{titel}</h3>
        ):(
            <h3 className='SideBar__Item__channelName' >
            <span className='SideBar__Item__channelName__hash' >#</span>{titel}
            </h3>
        )
    }
    </div>
  )
}

export default SideBarItem
