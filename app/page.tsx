import React from 'react'
import Navbar from './components/Navbar'
import ProductsSection from './sections/ProductsSection'

const page = () => {
  return (
    <div className='min-h-screen bg-[#F9F9F9] overflow-x-hidden'>
      <Navbar/>
      <ProductsSection/>
    </div>
  )
}

export default page