import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import { useSelector } from 'react-redux'
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
        const gaye = await data.json()
        setProductDetail(gaye)
        }
        fetchData()
    },[router,token])
    return(
        <div>
        {productDetail?.product?.name}
        </div>
    )
}