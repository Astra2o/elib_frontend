import React, { useContext } from 'react'
import { CaptainDataContext } from '../../context/CaptainContext';

const CaptainHome = () => {
    const {captain} = useContext(CaptainDataContext)
    console.log(captain);
  return (
    <div>
        <div>{captain.fullname.firstname}</div>
        <div>{captain.fullname.lastname}</div>
        <div>{captain.email}</div>
        <div>{captain._id}</div>
    </div>
  )
}

export default CaptainHome