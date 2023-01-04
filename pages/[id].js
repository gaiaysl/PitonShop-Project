import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import {AiFillHeart} from 'react-icons/ai'

export default function ProductDetail2(){


const [productDetail,setProductDetail]=useState([])
const {token} = useSelector(state=>state.user)

const router = useRouter()
const {isReady}=router
const [coin,setCoin]=useState(null)
const [mounted,setMounted]=useState(false)

    useEffect(()=>{
      
        setCoin(window.localStorage.getItem("token"))
        if(router.isReady){
            try{
                const fetchData = async()=>{
           
                    const data = await fetch(`https://assignment-api.piton.com.tr/api/v1/product/get/${router.query.id}`,
                {
                    method:"get",
                   headers:{
                   "access-token":coin,
                   }
                })
                const products = await data.json()
                setProductDetail(products)
                }
                fetchData()
            } catch (err){
                console.log(err)
            }
        
    }
    },[router,token,coin])
   
    return(

        <Layout>
            <div className="relative shadow-md  aspect-w-1 aspect-h-1 py-6 mt-5  mx-auto max-w-4xl border-2 border-gray rounded-lg flex flex-row sm:my-36 flex-wrap  ">
            <div className="absolute  top-1  flex flex-row gap-1 items-center sm:top-2 right-2">
                <p className="text-sm ">{productDetail?.product?.likes.length} likes   </p>
                <AiFillHeart/>
                </div>
                <div className="mx-auto ">
                    
                <div className="  overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={`https://assignment-api.piton.com.tr${productDetail?.product?.image}`}
                 
                  className="h-96 w-72  object-fill object-center group-hover:opacity-75"
                />
              </div>
                </div>
                <div className="sm:mx-auto sm:px-4  sm:w-80 py-4  ">
                
            <h2 className="font-bold sm:py-4 sm:text-xl text-center sm:text-start ">{productDetail?.product?.name}</h2>
            <p className="text-sm text-center sm:text-start py-2 ">{productDetail?.product?.description}</p>
            </div>
            <div className=" sm:my-44 ">
            
                       <label className=" flex-1 relative block ">
                       
                       <div className=" h-11 bg-blue sm:w-24 w-32  border-2 border-gray  rounded-lg  p-2 mt-2 py-2  text-sm pt-2 "/>  
                       <span  className=" text-white font-medium px-12  absolute top-0 left-0 h-full sm:px-4 flex items-center transition-all  ">{productDetail?.product?.price} ₺ </span>
                       </label>
                   </div>
                   </div>
        </Layout>
        
    )
}