import React,{useState,useEffect} from 'react'
import "./SideBar.css"
import {useSelector} from "react-redux"
import {Add,Apps,BookmarkBorder,Create,Drafts,ExpandLess,ExpandMore,FiberManualRecord,FileCopy,Inbox,InsertComment,PeopleAlt} from "@mui/icons-material";
import SideBarItem from './sideBarItem/SideBarItem';
import { query,collection,onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const SideBar = () => {

    const user=useSelector((state)=>state.userInfo.user)
    const [channels, setChannels] = useState([]);


    useEffect(() => {
      const q=query(collection(db,"rooms"))
      onSnapshot(q,(snapShot)=>{
        setChannels(
          snapShot.docs.map((doc)=>{
            return{
              id:doc.id,
              name:doc.data().name,
            }
          })
        )
      })
     
     
    }, [])

  return (
    <div className='SideBar' >
    <div className='SideBar__header' >
    <div className='userInfo' >
    <h2>React Training</h2>
    <h3>
    
    <FiberManualRecord className='FiberManualRecord ' />{user.displayName}<Create className='Create' />
    </h3>
    </div>
    </div>

    <SideBarItem Icon={InsertComment} titel="Threads" />
    <SideBarItem Icon={Inbox} titel="Mention & Reaction" />
    <SideBarItem Icon={Drafts} titel="Saved items" />
    <SideBarItem Icon={BookmarkBorder} titel="Channel browser" />
    <SideBarItem Icon={PeopleAlt} titel="People & user groups" />
    <SideBarItem Icon={Apps} titel="Apps" />
    <SideBarItem Icon={FileCopy} titel="File Browser" />
    <SideBarItem Icon={ExpandLess} titel="Show less" />
    <hr />
    <SideBarItem Icon={ExpandMore} titel="Channels" />
    <hr />
    <SideBarItem Icon={Add} titel="Add Channel" addChannelOption />
    {
      channels.map((channel)=>{
        return(
          <SideBarItem key={channel.id} titel={channel.name} id={channel.id} /> 
        )

      })
    }











   
    
      
    </div>
  )
}

export default SideBar
