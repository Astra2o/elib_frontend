import React, { useState } from 'react'

const ConfirmRide = (props) => {

    const [lookingForDriver, setlookingForDriver] = useState(false)
    
    const confirmRide=()=>{
        setlookingForDriver(true)
        console.log(true);
        
    }

  return (
    <>
          
          <div  onClick={()=>{props.setconfirmRidePanel(false) ;} } className='absolute w-full  text-gray-400 top-1 flex mb-2 justify-center  ' ><i className="ri-arrow-down-wide-fill   text-3xl"/></div>


            <div className=" flex capitalize  px-3 flex-col ">
                {lookingForDriver? <div className='text-2xl mb-5 font-semibold'>looking for driver</div> : <div className='text-2xl mb-5 font-semibold'>Confirm your ride</div>

}
                {/* <div className='text-2xl mb-5 font-semibold'>Confirm your ride</div> */}
                <div className='flex justify-center '>
                    <img className=' w-60' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_258,w_458/v1631125074/assets/a5/65af2c-aa9a-48c7-a0de-af4037095837/original/uber-moto.png " alt="" />
                </div>
                <div className="user-location border-b-2  py-1 flex items-center">
                <i className="ri-map-pin-user-fill text-2xl w-10"></i>                  <div>
                    <h3 className='text-xl font-semibold'>562/11e</h3>
                    <h5 className=' text-gray-600'>civil hospital</h5>
                  </div>
                </div>

                <div className="user-destination border-b-2  py-1 flex items-center">
                <div className='w-10'><i className="ri-map-pin-2-fill text-2xl "></i></div>
                <div>
                    <h3 className='text-xl font-semibold'>railway station</h3>
                    <h5 className=' text-gray-600'>ambala cantt</h5>
                  </div>
                </div>

                <div className="user-ride-price py-1  flex items-center">
                  <div className='w-10'><i className="ri-money-rupee-circle-fill text-2xl w-10"></i></div>
                  <div>
                    <h3 className='text-xl font-semibold'>&#8377;193.20</h3>
                    <h5 className='payment-mode text-gray-600'>Cash</h5>
                  </div>
                </div>

            </div>
            {!lookingForDriver? <button onClick={()=>{confirmRide()}} className=' w-full text-white text-xl font-semibold bg-green-600 py-2 rounded-lg mt-20'>
                         Confirm Ride
              </button>:<div className=' text-center text-xl py-2 mt-20'>Please Wait ...</div>}
              
    </>
  )
}

export default ConfirmRide