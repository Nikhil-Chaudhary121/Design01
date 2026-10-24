import React from 'react'
import ImgContainer from './components/ImgContainer'
import ServiceContainer from './components/ServiceContainer'
import ImgTextSection from './components/ImgTextSection'

const page = () => {
  return (
    <div className=' flex flex-col gap-10 items-center w-full py-8 px-4 md:px-8 lg:px-20'>
        <p className=' text-[2rem] md:text-[3rem] lg:text-[5rem]'>About Our Company</p>
        <ImgContainer/>
        <div className='flex flex-col md:gap-0 gap-6 md:flex-row w-full justify-between items-center py-12'>
            <p className=' text-[3rem] md:text-[2rem] lg:text-[3rem] leading-none'>Ai driven solutions for <br /> business operations.</p>
            <p className=' text-[1.8rem] md:text-[1rem] ' >Our mission simplify communication, <br /> enhance customer engagements, and to the <br /> streamline operations</p>
        </div>
        <ServiceContainer/>
        <ImgTextSection/>
        <p className='my-8 lg:text-[4rem] md:text-[2.8rem] text-[1.8rem]'>Bringing Expertise to 
        every interaction.</p>
    </div>
  )
}

export default page