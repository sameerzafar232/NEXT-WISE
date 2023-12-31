
import Image from "next/image";


import { FC } from "react";

const Offer:FC = () => {



    return(

        <>
        
        <h1 className="ml-16 mt-5 font-bold text-2xl">Special Offers</h1>

        <div className="hero flex flex-col md:flex-row justify-center gap-3 mt-8 ">
< Image src="/images/download.webp" alt="hero" width={350} height={150}/>

< Image src="/images/download.webp" alt="hero" width={350} height={150}/>

< Image src="/images/download.webp" alt="hero" width={350} height={150}/>

< Image src="/images/download.webp" alt="hero" width={350} height={150}/>
</div>
        
        </>
    )
}

export default Offer