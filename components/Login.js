
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import Link from "next/link"
import {useState} from 'react'
import { logout ,signInUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux'


export default function Login(){
    
    
     
    const[email,setemail] = useState("")
    const[password,setpassword] = useState("")

    
    const dispatch = useDispatch();
    const handleLogin = ()=>{
        console.log(email,password)
        dispatch(signInUser({email,password}))
     }
     const logoutHandle = () =>{
        dispatch(logout)
    
     }

    return(
       <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full "> 
     <div className="container  hidden sm:block  h-full w-full bg-gradient-to-b from-dark-blue to-light-blue text-white sm:flex sm:flex-col sm:justify-center  ">
<div className="mx-auto">
<h1 className="text-4xl font-bold mb-2 ">PitonShop</h1>
<h2 className="text-lg  ">The most popular book shop for IT</h2>
</div>

     </div>
     <div className=" flex flex-col justify-center gap-y-2">
        <div  className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-2 ">Hello Again!</h2>
            <p className="text-lg font-medium mb-5 tracking-wide ">Welcome Back</p>
           
    
                <div className="flex flex-col ">
                    <label className=" flex-1 relative block ">
                    <input required 
                    type="email" 
                    value={email} 
                    onChange={(e)=> setemail(e.target.value)}
                    className="w-full h-14 px-4  border-2 border-gray-100 rounded-full p-2 mt-2 py-2 focus:bg-gray-50 focus:outline-none peer text-sm pt-2 "/>  
                    <span  className=" text-gray-300 absolute top-0 left-0 h-full px-4 flex items-center transition-all peer-focus:h-7 peer-focus:text-gray-400 peer-focus:text-sm peer-valid:text-gray-400 peer-valid:h-7 peer-valid:text-sm mt-1  ">< AiOutlineMail/> Email Address</span>
                    </label>
                </div>
                <div className="flex flex-col ">
                    <label  className=" flex-1 relative block ">
                    <input required 
                    type="password" 
                    value={password} 
                    onChange={(e)=> setpassword(e.target.value)}
                    className="w-full h-14 px-4  border-2 border-gray-100 rounded-full p-2 mt-2 py-2 focus:bg-gray-50 focus:outline-none peer text-sm pt-2 "/>
                    <span className=" text-gray-300 absolute top-0 left-0 h-full px-4 flex items-center transition-all peer-focus:h-7 peer-focus:text-gray-400 peer-focus:text-sm peer-valid:text-gray-400 peer-valid:h-7 peer-valid:text-sm mt-1 "><RiLockPasswordFill /> Password</span>
                    </label>
                </div>
                <div className='text-center'>
                <button onClick={handleLogin} className="h-14 p-2 text-white  rounded-full w-full my-5 py-2 bg-blue shadow-lg shadow-blue-500/50 hover:shadow-blue-500/40 ">Login</button>
               
                <a className='text-gray-600 cursor-pointer'>Forgot Password</a>
<Link href="/register" className='font-semibold text-blue'>Kayıt Ol</Link>
          
                </div>
        </div>

     </div>
       </div>
    )
}