import  { useContext, useEffect, useRef, useState } from 'react'
import { CaptainDataContext } from '../../context/CaptainContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
const CaptainHome = () => {
    const {captain} = useContext(CaptainDataContext)
    const [pickup, setpickup] = useState()
    const [destination, setDestination] = useState();
    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const panelclosebtn = useRef(null);

    // console.log(captain);
    //  useEffect(() => {
    //    if (panelOpen) {
    //     console.log(panelOpen);
        
    //     panelRef.current.style.height ='70%'
    //    }else{          panelRef.current.style.height ='0%'
    //    }
    //  }, [panelOpen])

     useGSAP(()=>{
      if (panelOpen) { 
         gsap.to(panelRef.current,{       
            height:'70%',
          })
          gsap.to(panelclosebtn.current,{
            opacity:1
          })
      }else{
        gsap.to(panelRef.current,{       
          height:'0%',
        })
        gsap.to(panelclosebtn.current,{
          opacity:0 
        })
      }

     },[panelOpen])
     
    const submithandler=(e)=>{
        e.preventDefault();

    }

  return (
    <div className=' relative h-screen'>
        {/* <div>{captain.fullname.firstname}</div>
        <div>{captain.fullname.lastname}</div>
        <div>{captain.email}</div>
        <div>{captain._id}</div> */}

        <img className='w-20 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
      <div className='h-screen w-full'>
        {/* image for temp */}
        <img  className='h-full w-full obj' src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif" alt="map" />
      </div>
      <div className=' w-full flex-col justify-end flex h-screen    top-0 absolute'>
          <div  className='h-[30%] p-5 relative bg-white  '>

       
            <h4 className=' text-2xl  mb-2 font-semibold'>Find a trip</h4>
            <button ref={panelclosebtn} className='absolute top-3 right-10' onClick={()=>setPanelOpen(false)}><i className="ri-arrow-down-wide-fill text-2xl"/></button>
            <form onSubmit={(e)=>submithandler(e)} action="">

            <input onClick={()=>{setPanelOpen(true); console.log(panelOpen);
            }
            } value={pickup} onChange={(e)=>setpickup(e.target.value)} className='bg-[#eee] px-12 py-2  rounded-lg w-full mb-5' type="text" placeholder='Add a Pick-up Location' />
            <input onClick={()=>setPanelOpen(true)} value={destination} onChange={(e)=>setDestination(e.target.value)} className='bg-[#eee] px-12 py-2  rounded-lg w-full' type="text" placeholder='Enter your Destination' />
            </form>
          </div>
          <div ref={panelRef} className='  bg-white'>

          </div>
      </div>
    </div>
  )
}

export default CaptainHome