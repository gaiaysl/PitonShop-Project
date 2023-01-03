import { useEffect, useState } from "react"
import Link from 'next/link'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'


export default function Products(){

  const [urun,setUrun]=useState([]);
  const {token} = useSelector(state=>state.user)
  
  

useEffect(()=>{

    const fetchData = async()=>{
        const data = await fetch("https://assignment-api.piton.com.tr/api/v1/product/all",
    {
        method:"get",
       headers:{
       "access-token":token,
       }
    })
    const produtcs = await data.json()
    setUrun(produtcs)
    }
    fetchData()
},[token])



    return(
      
   <Layout>
       <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className=" sr-only">Products</h2>
        
        <div className=" rounded-lg grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      
          {urun?.products?.map((product,index) => (
            <div key={index} className=" max-w-sm relative  p-6 bg-white border border-gray rounded-lg shadow-md ">
                <input  type="checkbox"  className="absolute top-0 right-0 mr-2 w-4 h-4  mt-1 border-lightGray rounded  focus:ring-red-500  focus:ring-1 checked:bg-red-500 cursor-pointer transition duration-200 "/>
    
<Link href={`/${product.id}`} key={index}>

              <div className=" flex  justify-center aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={`https://assignment-api.piton.com.tr${product.image}`}
                  alt={product.description}
                  className="h-72 w-44 object-fill object-center group-hover:opacity-75"
                />
              </div>
             
              <h3 className="mt-4 text-sm font-semibold text-gray-700 text-center h-20">{product.name}</h3>
           
<hr></hr>
              <p className="mt-2 text-lg font-semibold text-blue text-center">{product.price} ₺</p>
           

</Link>

</div> 
          ))}
        </div>
       
        </div>
      
    </div>
    </Layout>
    )
}