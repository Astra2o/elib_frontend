import {useState} from 'react'
import { Link } from 'react-router-dom'
const CaptainLogin = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const loginSubmit=(e)=>{
        e.preventDefault()
        
        console.log({email,password});

        setemail('')
        setpassword('')
    }
  return (
    <div className='p-7 flex flex-col justify-between h-full min-h-screen w-full'>
    <div>
    <img className='w-20 ' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
   
    <div className=' text-3xl mt-12 font-semibold'>Hi Captain 👋</div>

   
        <form action="">
            <h3 className='text-xl mt-4 font-medium mb-2'> What's your email</h3>
            <input value={email} onChange={(e)=>setemail(e.target.value)} className='border bg-white px-4 py-2 w-full text-lg placeholder:text-base border-black rounded-lg' placeholder='email@ex.com' required  type="email" />
        
            <h3 className='text-xl mt-4 font-medium mb-2'> Password</h3>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} className='border bg-white px-4 py-2 w-full text-lg placeholder:text-base border-black rounded-lg' placeholder='*******' required  type="password" />
        
            <button onClick={(e)=>loginSubmit(e)} className='bg-[#111] text-white font-semibold mb-4 rounded-lg w-full text-lg  px-5 py-3 mt-6'>Login</button>
            <p> <Link className=' text-blue-600'>Forget Password ?</Link></p>
            <p>New here? <Link to='/captain-signup' className=' text-blue-600'>Register as a Captain</Link></p>
        </form>
    </div>
    <div className='w-full'>
        <Link to='/login' className='bg-[#10b461] flex justify-center text-white font-semibold  rounded-lg w-full text-lg  px-5 py-3 mt-6'>Login as an User</Link>
    </div>
</div>  )
}

export default CaptainLogin