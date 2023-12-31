"use client"



import Image from "next/image";
import { FC, useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar:FC = () => {
  const [showbar,setshowbar] = useState(false)
return (

  
<div>


<div className="hidden md:block">
      <div className="bg-white border-b ">
      <div className="container mx-auto flex items-center justify-between py-4">
        
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />

        <div className="flex items-center cursor-pointer">

         
          <div className="flex items-center justify-center p-2">
            <input
              type="text"
              placeholder="Search by brand, Color, Model..."
              className="bg-gray-100 px-4 py-2 rounded focus:outline-none"
            />
            <span className="material-symbols-outlined ml-2 cursor-pointer">search</span>
          </div>
        </div>

        
        <div className="flex items-center gap-4">
            <div className="flex items-center ">
            <span className="material-symbols-outlined mr-2 cursor-pointer">contacts</span>
          <p className="mr-4">Login / Register</p>
            </div>
          
          <div className="h-6 mx-4">|</div>
          <span className="material-symbols-outlined cursor-pointer">favorite</span>
          <div className="h-6 mx-4">|</div>
          <span className="material-symbols-outlined cursor-pointer">shopping_cart</span>
          <div className="h-6 mx-4">|</div>
          <span className="material-symbols-outlined cursor-pointer">compare</span>
        </div>
      </div>
    </div>
    </div>


    <div className="bg-white text-black py-4 border-b hidden md:block">
  <div className="container mx-auto flex justify-center">
   
    <nav className="flex flex-col md:flex-row gap-6 md:items-center">

     
     
        <a
          href="#"
          className=" cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Mobile
        </a>
        <a
          href="#"
          className="cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Laptop
        </a>
        <a
          href="#"
          className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Tablets
        </a>
        <a
          href="#"
          className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Smart Watches
        </a>
        <a
          href="#"
          className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Accessories
        </a>
        <a
          href="#"
          className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Wireless Earbuds
        </a>
        <a
          href="#"
          className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Home and Lifestyle
        </a>
        <a
          href="#"
          className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Gaming
        </a>
        <a
          href="#"
          className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Kids
        </a>
        <a
          href="#"
          className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
          >
          Health & Beauty
        </a>
      
    </nav>
  </div>
</div>


{/* mobile slide bar */}

<div className="  md:hidden flex justify-between items-center p-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
              <span className="p-4" onClick={()=>setshowbar(showbar?false:true)}>

              <IoMenu />
              </span>
            
            </div>
      {/* // Slide Bar */}

      {showbar?
 <div className="bg-white text-black py-4 border-b">
 <div className="container mx-auto flex justify-center">
   {/* options */}
   <nav className="flex flex-col md:flex-row gap-6 md:items-center">
   

     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Mobile
     </a>
     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Laptop
     </a>
     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Tablets
     </a>
     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Smart Watches
     </a>
     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Accessories
     </a>
     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Wireless Earbuds
     </a>
     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Home and Lifestyle
     </a>
     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Gaming
     </a>
     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Kids
     </a>
     <a
       href="#"
       className="hover:text-green-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
     >
       Health & Beauty
     </a>
   </nav>
 </div>
</div>:null
      }

     
    </div>



  
  

   


  
)
}


export default Navbar