import { logout } from '../redux/authSlice'
import { useDispatch } from 'react-redux' 
import { useEffect,useState } from 'react'
import { router } from "next/router";

export default function Navbar(){

    const [token,setToken]=useState(null) 

    useEffect(()=>{
        setToken(window.localStorage.getItem("token"))
        
        }
        
        ,[token])
      
     
        const dispatch = useDispatch();
        const logoutHandle = () =>{
          dispatch(logout(token))
          router.push('/')
      
       }
  
  
    return(
        <div className=" w-full bg-gray opacity-90 backdrop-blur-md  shadow-gray-800/40  ">
            
            <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className=" h-16 w-full flex flex-row  justify-between mx-auto ">
        <a href={token?"/products":"/"}>
            <button  className="text-2xl pb-1  h-9 mt-3 text-white w-40 rounded-full  bg-blue shadow-lg shadow-blue-500/50 hover:shadow-blue-500/40 ">Piton<span className="text-purple-400">Shop</span></button>
            </a>
            
            <button onClick={logoutHandle} className="text-sm font-semibold  bg-white h-7 mt-4 w-20 rounded-full  shadow-lg shadow-gray-300/50 hover:shadow-gray/50 hover:backdrop-blur-xl hover:drop-shadow-2xl transition-all ease-in-out duration-400 ">Logout</button>
                        
            </div>
            </div>
        </div>
    )
}