import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const UserMode = () => {
    const usertype=localStorage.getItem('user-type')
    const navigate= useNavigate()
    useEffect(() => {
        if (usertype=='captain') {
            navigate('/captain')
        }else{
            navigate('/user')
            

        }
    }, [])
    
    
  return (
    <>
    
    
    </>
  )
}

export default UserMode