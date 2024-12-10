import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
<div className="h-[100vh] pt-6  flex justify-between bg-cover bg-left bg-no-repeat    flex-col bg-[url(https://cdn.prod.website-files.com/6169f9a6d36653b092748725/6543ef9c660244cd8a87ee6f_653ea20ea3339932268fbb72_Uber.png)] w-full">
        <img className='w-20 ml-7' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
        <div className=' py-4 pb-10 rounded-t-3xl px-4 bg-white' >
            <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
            <Link to='/signup' className=' flex justify-center w-full bg-black text-white py-3 rounded mt-2'>Continue</Link>
        </div>
    </div>  )
}

export default Start