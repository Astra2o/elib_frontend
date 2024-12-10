import React, { useContext,useEffect } from 'react'
import homeImg from '../assets/uberhome.png'
import { Link, useNavigate } from 'react-router-dom'
import Start from '../Components/Start.jsx'
import { UserDataContext } from '../context/UserContext.jsx'
import UserHome from '../Components/UserHome.jsx'
import axios from 'axios'
import { conf } from '../config/conf.js'
import UserMode from '../Components/UserMode.jsx'
const Home = () => {
    const token=localStorage.getItem('access-token')
    // const usertype=localStorage.getItem('user-type')
    // const navigate= useNavigate()



    
  return (
    <>
    {!token ? <Start/>: <UserMode/>
    }
    {/* <Start/> */}
    
    </>
  )
}

export default Home