import React from 'react'

const LocationSearchPanel = (props) => {
    const location =[
        ' 15b Civil Hospital ,Ambala Cantt, Ambala,133001',
        '23 ,Civil Hospital , Ambala,133001',
        ' efef ,Civil Hospital ,Ambala Cantt, Ambala,133001',
        
        'fef ,Civil Hospital ,Ambala Cantt, Ambala,133001',
        'fef ,Civil Hospital ,Ambala Cantt, Ambala,133001',
        'fef ,Civil Hospital ,Ambala Cantt, Ambala,133001',
        'fef ,Civil Hospital ,Ambala Cantt, Ambala,133001',
    ]
  return (
    <div onClick={()=>{ 
        props.setvehiclePanal(true);
        props.setPanelOpen(false)

    }} className='flex gap-3  overflow-y-auto overflow-x-hidden flex-col'>
        {location.map((elem,index)=>{
            return <div key={index} className="flex gap-4 active:border-black rounded-lg px-4 border-2 py-3 mx-4 items-center justify-start">
            <h2 className="flex bg-[#eee] h-10 items-center justify-center rounded-full w-12 "><i className="ri-map-pin-fill text-xl"></i></h2>
            <h2 className=" font-medium "> {elem}</h2>
        </div> 
        })
        }
       
      
    </div>
  )
}

export default LocationSearchPanel