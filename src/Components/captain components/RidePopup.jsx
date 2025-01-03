import React from 'react'

const RidePopup = ({setconfirmRidePanel,setridePopup}) => {
    
  return (
    <div>

            <div className=" flex capitalize  px-1 flex-col ">


                <div className='text-2xl mb-2 font-semibold'>Here is New ride</div>

                <div className="flex justify-between bg-yellow-200 p-2 rounded-xl items-center" >
                    <div className='flex items-center gap-2'>
                        <img className='h-10 w-10   rounded-full' src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1080&h=893&q=70&fm=webp" alt="" />
                        <h4 className='text-lg font-medium '>Harsh</h4>
                    </div>
                    <div>
                        <h4 className=' text-md text-gray-600 font-semibold'>2.2 KM </h4>
                    </div>
                </div>
                


                <div className="user-location border-b-2 px-2  py-1 flex items-center">
                <i className="ri-map-pin-user-fill text-2xl w-10"></i>                  <div>
                    <h3 className='text-xl font-semibold'>562/11e</h3>
                    <h5 className=' text-gray-600'>civil hospital</h5>
                  </div>
                </div>

                <div className="user-destination border-b-2 px-2  py-1 flex items-center">
                <div className='w-10'><i className="ri-map-pin-2-fill text-2xl "></i></div>
                <div>
                    <h3 className='text-xl font-semibold'>railway station</h3>
                    <h5 className=' text-gray-600'>ambala cantt</h5>
                  </div>
                </div>

                <div className="user-ride-price py-1 px-2  flex items-center">
                  <div className='w-10'><i className="ri-money-rupee-circle-fill text-2xl w-10"></i></div>
                  <div>
                    <h3 className='text-xl font-semibold'>&#8377;193.20</h3>
                    <h5 className='payment-mode text-gray-600'>Cash</h5>
                  </div>
                </div>

            </div>
            <div className='flex gap-5 pt-5 px-5 justify-between'>
                <button onClick={()=>{setridePopup(false)}} className='py-2 px-4 w-full bg-red-600 rounded-xl text-white'>Ignore</button>
                <button  onClick={()=>{ setconfirmRidePanel(true); setridePopup(false); }} className='py-2 px-4  w-full bg-green-600 rounded-xl text-white'>Accept</button>
            </div>
    </div>
  )
}

export default RidePopup