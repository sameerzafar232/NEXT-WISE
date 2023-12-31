import Image from 'next/image';
import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
const Footer: React.FC = () => { return (




    <>
    
    <div className=' w-400 mt-8 mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black'>
      <div>

      <Image src="/images/footer.png" alt="Logo" width={100} height={100} />
        <h5 className='w-full text-lg mt-4 font-bold text-white'>WISE MARKET</h5>
        <ul>
            <li className=''>Johor town lahore</li>
            <li className=''>03123456789</li>
            <li className=''>Support@Wisemarket.com.pk</li>
            <li className=''>Stay connencted</li>
        </ul>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between flex-col md:flex-row mt-6'>
    <div>
        <h6 className='font-bold text-white'>Quick Links</h6>
        <ul>
            <li className=''>About US</li>
            <li className=''>FAQ'S</li>
            <li className=''>Contact US</li>
            <li className=''>Blogs</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-white'>Services</h6>
        <ul>
            <li className=''>Return policy</li>
            <li className=''>Privacy Policy</li>
            <li className=''>Refund-&-Shiping</li>
            <li className=''>Warranty</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-white'>My account</h6>
        <ul>
            <li className=''>Sign in</li>
            <li className=''>View Cart</li>
            <li className=''>My wishlist</li>
            <li className=''>Help</li>
           
        </ul>
    </div>
    <div>
        <h6 className=' border-green-700  bg-green-700 font-bold text-white rounded w-30'>Become a Vendor</h6>
        <ul>
            <li className=''>Reach millions of customer</li>
            <li className=''>Nation wide through wise market A</li>
            <li className=''>Leading Smart devices Platform in</li>
            <li className=''>Pakistan</li>
        </ul>
    </div>
      </div>
    </div>
    
    
    </>
)


}
export default Footer
 