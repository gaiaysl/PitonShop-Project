export default function Navbar(){
    return(
        <div className=" w-full bg-gray opacity-90 backdrop-blur-md  shadow-gray-800/40  ">
            
            <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className=" h-16 w-full flex flex-row  justify-between mx-auto ">
            <button className="text-2xl pb-1  h-9 mt-3 text-white w-40 rounded-full  bg-blue shadow-lg shadow-blue-500/50 hover:shadow-blue-500/40 ">Piton<span className="text-purple-400">Shop</span></button>
            
            <button className="text-sm font-semibold  bg-white h-7 mt-4 w-20 rounded-full  shadow-lg shadow-gray-300/50 hover:shadow-gray-500/40 ">Logout</button>
                        
            </div>
            </div>
        </div>
    )
}