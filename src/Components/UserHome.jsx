import {useContext, useRef, useState} from 'react'
import { UserDataContext } from '../context/UserContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from './usercomponents/LocationSearchPanel';
import VehiclePanel from './usercomponents/VehiclePanel';
import ConfirmRide from './usercomponents/ConfirmRide';

const UserHome = () => {
    const {user} = useContext(UserDataContext)
    // console.log(user);
    const [pickup, setpickup] = useState()
    const [destination, setDestination] = useState();
    const [panelOpen, setPanelOpen] = useState(false);
    const [vehiclePanal, setvehiclePanal] = useState(false);
    const [confirmRidePanel, setconfirmRidePanel] = useState(false)

    const panelRef = useRef(null);
    const panelclosebtn = useRef(null);
    const vehiclePanalRef = useRef(null);
    const rideConfirmPanalRef = useRef(null);
    

    // gsap animations---------------

        // panel open
    useGSAP(()=>{
      if (panelOpen) { 
         gsap.to(panelRef.current,{       
            height:'70%',
            display:'block'
          })
          gsap.to(panelclosebtn.current,{
            opacity:1
          })
      }else{
        gsap.to(panelRef.current,{       
          height:'0%',
          display:'none'

        })
        gsap.to(panelclosebtn.current,{
          opacity:0 
        })
      }

     },[panelOpen])
 
     // vehicle panel open
     useGSAP(()=>{
        if (vehiclePanal) {
          gsap.to(vehiclePanalRef.current,{
            transform:'translateY(0)'
          })
        }else {
          gsap.to(vehiclePanalRef.current,{
            transform:'translateY(100%)',
            // background:'red'
          })
        }
     },[vehiclePanal])
  
     // ride confirm vehicle
     useGSAP(()=>{
      if (confirmRidePanel) {
        gsap.to(rideConfirmPanalRef.current,{
          transform:'translateY(0)'
        })
      }else {
        gsap.to(rideConfirmPanalRef.current,{
          transform:'translateY(100%)',
          // background:'red'
        })
      }
   },[confirmRidePanel])
   
    const submithandler=(e)=>{
        e.preventDefault();

    }
    
  return (
    <>
       <div className=' relative  h-screen'>
        {/* <div>{captain.fullname.firstname}</div>
        <div>{captain.fullname.lastname}</div>
        <div>{captain.email}</div>
        <div>{captain._id}</div> */}

        <img className='w-20 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
      <div  className='h-screen w-full'>
        {/* image for temp */}
        <img   className='h-full w-full obj' src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif" alt="map" />
      </div>
      <div className=' w-full flex-col justify-end flex h-screen    top-0 absolute'>
          <div  className='h-[30%]  p-5 relative bg-white  '>

       
            <h4 className=' text-2xl  mb-2 font-semibold'>Find a trip</h4>
            <button ref={panelclosebtn} className='absolute top-3 right-10' onClick={()=>setPanelOpen(false)}><i className="ri-arrow-down-wide-fill text-2xl"/></button>
            <form className='flex flex-col ' onSubmit={(e)=>submithandler(e)} action="">

            <input onClick={()=>{setPanelOpen(true); console.log(panelOpen);
            }
            } value={pickup} onChange={(e)=>setpickup(e.target.value)} className='bg-[#eee] px-12 py-2  rounded-lg w-full mb-5' type="text" placeholder='Add a Pick-up Location' />
            <input onClick={()=>setPanelOpen(true)} value={destination} onChange={(e)=>setDestination(e.target.value)} className='bg-[#eee] px-12 py-2  rounded-lg w-full' type="text" placeholder='Enter your Destination' />
            </form>
          </div>
          <div ref={panelRef} className=' h-0 overflow-y-scroll pb-7 bg-white'>
                  <LocationSearchPanel setPanelOpen={setPanelOpen} setvehiclePanal={setvehiclePanal} />
                 
          </div>

          

          
          <div ref={vehiclePanalRef} className='fixed  rounded-t-lg bg-white flex flex-col gap-3 w-full p-3  py-8 translate-y-full z-10 bottom-0'>
              <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setvehiclePanal={setvehiclePanal}  />         
          </div>

          <div ref={rideConfirmPanalRef} className='fixed rounded-t-3xl bg-white flex flex-col gap-3 w-full p-3  py-8 translate-y-full z-10 bottom-0'>
             <ConfirmRide setconfirmRidePanel={setconfirmRidePanel}/>
          </div>
          
      </div>
    </div>
    </>
  )
}

export default UserHome