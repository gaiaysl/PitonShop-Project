import { METHODS } from "http"
import { useEffect, useState } from "react"
import Link from 'next/Link'

export default function Products({token}){


const [product,setProduct]=useState([])
useEffect(()=>{

    const fetchData = async()=>{
        const data = await fetch("https://assignment-api.piton.com.tr/api/v1/product/all",
    {
        method:"get",
       headers:{
       "access-token":token,
       }
    })
    const gaye = await data.json()
setProduct(gaye)
    }
    fetchData()
},[])
console.log("product neydi",product);
    return(
   
       <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {product?.products?.map((product) => (

<Link href={`/${product.id}`}>

              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={`https://assignment-api.piton.com.tr${product.image}`}
                  alt={product.description}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          
</Link>
          
          ))}
        </div>
      </div>
    </div>
    )
}