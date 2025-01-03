import  { useContext, useEffect, useRef, useState } from 'react'
import { CaptainDataContext } from '../../context/CaptainContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import RidePopup from '../../Components/captain components/RidePopup';
import ConfirmRide from '../../Components/captain components/ConfirmRide';
const CaptainHome = () => {
    const {captain} = useContext(CaptainDataContext)
   
   const rideConfirmPanalRef = useRef();
   const ridePopupPanalRef = useRef();

   const [ridePopup, setridePopup] = useState(true);
   const [confirmRidePanel, setconfirmRidePanel] = useState(false)
   
   
   useGSAP(()=>{
    if (ridePopup) {
      gsap.to(ridePopupPanalRef.current,{
        transform:'translateY(0)'
      })
    }else {
      gsap.to(ridePopupPanalRef.current,{
        transform:'translateY(100%)',
        // background:'red'
      })
    }
 },[ridePopup])

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
    

  return (
    <>

        <div className="relative h-screen">
          <div className='absolute flex flex-row justify-between  w-full  '>
            <img className='w-24 p-5  ' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
              <button className='pr-5'>hello</button>
          </div>


            <div  className='h-screen w-full'>
             {/* image for temp */}
                <img   className='h-full w-full obj' src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>



            <div className=" absolute bottom-0 bg-white rounded-t-2xl  w-full p-4 flex flex-col  gap-3">

                  <div className='flex   justify-between'>
                      <div className='flex items-center gap-3'>
                        <img className='h-12 w-12 bg-cover  rounded-full' src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1080&h=893&q=70&fm=webp" alt="" />
                        <h4 className='text-2xl font-medium '>Harsh</h4>
                      </div>
                      <div>
                        <h4 className=' text-xl font-semibold'>$294.6</h4>
                        <p className='text-sm text-gray-600'>earned</p>
                      </div>
                  </div>

                  <div className='text-center capitalize flex rounded-3xl bg-gray-100 p-4 mb-5  gap-5 justify-around '>
                    <div>
                       <h2><i className='ri-timer-2-line text-5xl text-gray-600 font-thin'></i> </h2>
                        <h4 className='text-lg font-medium' >20km</h4>
                        <p className='text-sm text-gray-600'>hours online</p>

                       
                    </div>

                    <div>
                      <h2><i className='ri-speed-up-line text-5xl font-thin'></i> </h2>
                      <h4 className='text-lg font-medium' >20km</h4>
                      <p className='text-sm text-gray-600'>hours online</p>
                      <p></p>
                    </div>

                    <div>
                      <h2><i className='ri-booklet-line text-5xl font-thin  '></i> </h2>
                      <h4 className='text-lg font-medium' >20km</h4>
                      <p className='text-sm text-gray-600'>hours online</p>
                    </div>

                  </div>
            </div>

            <div ref={ridePopupPanalRef} className='fixed rounded-3xl bg-white flex flex-col gap-3 w-full p-3  pb-8   z-10 bottom-0'>
               <RidePopup setconfirmRidePanel={setconfirmRidePanel} setridePopup={setridePopup} />
            </div>
            <div ref={rideConfirmPanalRef} className='fixed rounded-3xl h-screen bg-white flex flex-col gap-3 w-full p-3  pb-8   z-10 bottom-0'>
                <ConfirmRide setconfirmRidePanel={setconfirmRidePanel} setridePopup={setridePopup}  />
            </div>
        </div>

    </>
  )
}

export default CaptainHome