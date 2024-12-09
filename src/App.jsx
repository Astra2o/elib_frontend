import { useState } from 'react'

import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/Users/UserSignup'
import UserLogin from './pages/Users/UserLogin'
import CaptainSignup from './pages/Captain/CaptainSignup'
import CaptainLogin from './pages/Captain/CaptainLogin'

function App() {
  

  return (
    <div className=' max-w-[435px] h-full bg-slate-200  '>
      <div>

 
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/signup' element={ <UserSignup/> } />
        <Route path='/login' element={ <UserLogin/> } />
        <Route path='/captain-signup' element={ <CaptainSignup/> } />
        <Route path='/captain-login' element={ <CaptainLogin/> } />
      </Routes>
      </div>
    </div>
  )
}

export default App
