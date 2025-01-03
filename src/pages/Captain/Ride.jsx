import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'


const Ride = () => {
   
     const [panelUp, setpanelUp] = useState(false)
     const panelUpRef =useRef();


     useGSAP(()=>{
        if (panelUp) {
          gsap.to(panelUpRef.current,{
          transform:'translateY(0%)'
          })
        }else {
          gsap.to(panelUpRef.current,{
            transform:'translateY(80%)'
            // background:'red'
          })
        }
     },[panelUp])


  return (
    <div className='h-screen relative '>
        <div className="fixed top-0 flex items-center justify-between w-screen">
        <img className='w-24 p-5  ' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
         <Link to={'/captain'}>
            home
         </Link>
        </div>

        <div className="h-[90%] fixed">
                {/* image for temp */}
                <img   className='h-full w-full obj' src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif" alt="map" />
        </div>
        <div ref={panelUpRef} className=" fixed   bottom-0  overflow-y-hidden w-full  bg-white flex flex-col justify-between items-center">
        <button onClick={()=>{setpanelUp(!panelUp)}} className='px-20 fixed z-10 '><i className="ri-arrow-up-s-line text-lg "></i></button>
            <div className='flex flex-col w-full'>
                <p>pick up at </p>
                <h4>civil hospital a/ cntt. </h4>
            </div>
            <button className=' px-10 mb-5    py-3 rounded-xl bg-yellow-400'>pick up</button>
            fdfv
           <div className=' h-[30vh] w-full bg-red-100 overflow-y-scroll'>
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
             fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
           
          
            fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
            <br />
            fvfvbr
            <br />
           </div>
            <br />
            <button className=' px-10 mb-5   py-3 rounded-xl bg-yellow-400'>drop</button>
        </div>

    </div>
  )
}

export default Ride