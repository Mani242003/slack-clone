import React from 'react'
import "./App.css"

import { useSelector } from 'react-redux'
import Login from "./pages/login/Login"
import Header from "./component/header/Header"
import SideBar from './component/sideBar/SideBar'
import {BrowserRouter,Routes,Route  } from "react-router-dom";
import Chat from './pages/chat/Chat'




const App = () => {


  const user = useSelector((state)=>state.userInfo.user)


 
 
 

  return (
    <BrowserRouter>
    
    {
      !user?(<Login />):(
      <>
      <Header />
      <div className='app'>
      <SideBar />
      <Routes>
      <Route path="/room/:roomId" element={<Chat />} />
      <Route path="/" element={<h1>Welcome</h1>} />

      </Routes>
      </div>
     
      </>
        )
    }

    </BrowserRouter>
    
  )
}
export default App
