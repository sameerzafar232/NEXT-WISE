import Image from 'next/image'
import Navbar from './(components)/Navbar'
import Hero from './(components)/Hero'
import RoundCard from './(components)/Cards'
import Demo from './(components)/Items'
import Redmi from './(components)/Realme'
import Newsletter from './(components)/Newsletter'
import Footer from './(components)/Footer'
import Hello from './(components)/Sale'

import Offer from './(components)/Special'
import Content from './(components)/Arrival'
import Main from './(components)/Categories'


export default function Home() {
  return (
<>

<Navbar/>
      <Hero/>
      <Main/>
      <RoundCard/>
      <Demo/>
      <Redmi/>
      <Offer/>
      <Content/>
      <Hello />
      <Footer/>
      <Newsletter/>


</>




  )
}
