import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 py-16'>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
    </div>
  )
}

export default ServiceContainer