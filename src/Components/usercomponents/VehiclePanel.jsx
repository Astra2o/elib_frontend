import React from 'react'

const VehiclePanel = (props) => {
  return (
    <>
                    <div className='text-2xl mt-2  font-semibold'>Choose a Vechile</div>
            <div  onClick={()=>{props.setvehiclePanal(false) ;} } className='absolute w-full  text-black top-1 flex mb-2 justify-center  ' ><i className="ri-arrow-down-wide-fill   text-3xl"/></div>

              <div onClick={()=>{props.setconfirmRidePanel(true);props.setvehiclePanal(false) ;}} className='flex justify-between border-2  active:border-black  rounded-xl items-center  pb-2 pt-2  w-full flex-row'>
                <img className='w-24' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_225,w_401/v1597151080/assets/f7/281120-cc1a-4fd4-84d1-f5df2b3f518f/original/Black.jpg " alt="" />
                <div className='ml-2 w-1/2'>
                  <h4 className=' text-xl font-bold'>UberGo   <span className=' text-base font-normal'><i className="ri-user-3-fill"/>4</span></h4>
                  <h5>2 min away </h5>
                  <h6 className='text-xs '>Affordable compect rides</h6>
                </div>
                <div className=" text-2xl font-semibold p-2 price">  &#8377;130.67</div>
              
              </div>
              
              <div className='flex justify-between border-2  active:border-black  rounded-xl items-center  pb-2 pt-2  w-full flex-row'>
                <img className='w-24' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_258,w_458/v1631125074/assets/a5/65af2c-aa9a-48c7-a0de-af4037095837/original/uber-moto.png " alt="" />
                <div className='ml-2 w-1/2'>
                  <h4 className=' text-xl font-bold'>UberGo   <span className=' text-base font-normal'><i className="ri-user-3-fill"/>4</span></h4>
                  <h5>2 min away </h5>
                  <h6 className='text-xs '>Affordable compect rides</h6>
                </div>
                <div className=" text-2xl font-semibold p-2 price">  &#8377;130.67</div>
              
              </div>
              <div className='flex justify-between border-2  active:border-black  rounded-xl items-center  pb-2 pt-2  w-full flex-row'>
                <img className='w-24' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_258,w_458/v1597151228/assets/fc/101ff8-81a1-46c3-995a-67b4bbd2f2bf/original/TukTuk.jpg " alt="" />
                <div className='ml-2 w-1/2'>
                  <h4 className=' text-xl font-bold'>UberGo   <span className=' text-base font-normal'><i className="ri-user-3-fill"/>4</span></h4>
                  <h5>2 min away </h5>
                  <h6 className='text-xs '>Affordable compect rides</h6>
                </div>
                <div className=" text-2xl font-semibold p-2 price">  &#8377;130.67</div>
              
              </div>
    </>
  )
}

export default VehiclePanel