import {useContext} from 'react'
import { UserDataContext } from '../context/UserContext';


const UserHome = () => {
    const {user} = useContext(UserDataContext)
    console.log(user);
    
  return (
    <>
        <div>{user.fullname.firstname}</div>
        <div>{user.fullname.lastname}</div>
        <div>{user.email}</div>
        <div>{user._id}</div>
    </>
  )
}

export default UserHome