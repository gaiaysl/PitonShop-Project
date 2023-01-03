import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import {FcLike} from 'react-icons/fc'

export default function ProductDetail2(){


const [productDetail,setProductDetail]=useState([])
const {token} = useSelector(state=>state.user)

const router = useRouter()

    useEffect(()=>{

        const fetchData = async()=>{
            const data = await fetch(`https://assignment-api.piton.com.tr/api/v1/product/get/${router.query.id}`,
        {
            method:"get",
           headers:{
           "access-token":token,
           }
        })
        const products = await data.json()
        setProductDetail(products)
        }
        fetchData()
    },[router,token])
   
    return(
        <Layout>
            <div className=" py-6 mx-auto max-w-4xl border-2 border-gray rounded-lg flex flex-row my-32">
                <div className="mx-auto ">
                <div className="shadow-md  aspect-w-1 aspect-h-1  overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={`https://assignment-api.piton.com.tr${productDetail?.product?.image}`}
                 
                  className="h-96 w-72  object-fill object-center group-hover:opacity-75"
                />
              </div>
                </div>
                <div className="  mx-auto px-2  w-80 -ml-4  ">
                
            <h2 className="font-bold py-4 text-xl ">{productDetail?.product?.name}</h2>
            <p className="text-sm ">{productDetail?.product?.description}</p>
            </div>
            <div className=" my-44   ">
            
                       <label className=" flex-1 relative block ">
                        
                       <div className=" h-11 px-4 bg-blue w-20  border-2 border-gray  rounded p-2 mt-2 py-2  text-sm pt-2 "/>  
                       <span  className=" text-white font-medium absolute top-0 left-0 h-full px-4 flex items-center transition-all  ">{productDetail?.product?.price} ₺ </span>
                       </label>
                   </div>
                   </div>
        </Layout>
        
    )
}