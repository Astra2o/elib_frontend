import { useState } from 'react'

import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/Users/UserSignup'
import UserLogin from './pages/Users/UserLogin'
import CaptainSignup from './pages/Captain/CaptainSignup'
import CaptainLogin from './pages/Captain/CaptainLogin'
import UserProtectedWrapper from './pages/Users/UserProtectedWrapper'
import UserHome from './Components/UserHome'
import UserLogout from './pages/Users/UserLogout'
import CaptainProtectedWrapper from './pages/Captain/CaptainProtectedWrapper'
import CaptainHome from './pages/Captain/CaptainHome'
import CaptainLogout from './pages/Captain/CaptainLogout'
import Ride from './pages/Captain/Ride'

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
        <Route  path='/user' element={
            <UserProtectedWrapper>
                <UserHome/>
            </UserProtectedWrapper>
        } />
        <Route  path='/user/logout' element={
            <UserProtectedWrapper>
                <UserLogout/>
            </UserProtectedWrapper>
        } />

        <Route  path='/captain' element={
          <CaptainProtectedWrapper>
              <CaptainHome/>
          </CaptainProtectedWrapper>
        } />

        <Route  path='/captain/logout' element={
          <CaptainProtectedWrapper>
              <CaptainLogout/>
          </CaptainProtectedWrapper>
        } />
         <Route  path='/captain/ride' element={
          <CaptainProtectedWrapper>
              <Ride/>
          </CaptainProtectedWrapper>
        } />
            

      </Routes>
      </div>
    </div>
  )
}

export default App
