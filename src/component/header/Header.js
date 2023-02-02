import React from 'react'
import "./Header.css"
import {useSelector} from "react-redux"
import { Avatar } from '@mui/material'
import {Search,AccessTime,HelpOutline} from "@mui/icons-material"

const Header = () => {

    const user=useSelector((state)=>state.userInfo.user)



  return (
    <div className='header' >
    <div className='header__left' >
    <Avatar className='header__avatar' src={user.photoURL} />
    <AccessTime />
    </div>
    <div className='header__center' >
    <Search />
    <input type='text' placeholder='Search here !!!!' />
    </div>
    <div className='header__right' >
    <HelpOutline />
    </div>

      
    </div>
  )
}

export default Header
