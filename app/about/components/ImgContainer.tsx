import React from 'react'

const ImgContainer = () => {
  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-6 h-full py-8'>
            <div className='flex flex-col-reverse lg:flex-col gap-4 h-full '>
                <div className='px-8 pb-4 bg-[#CDC4FD] rounded-2xl'>
                <h1 className='text-[5rem]'>10x</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae suscipit dolorum quisquam, ipsa enim aperiam unde a tempora doloribus ipsam.</p>
            </div>
                <img className='rounded-2xl h-full object-cover' src="https://plus.unsplash.com/premium_photo-1683887034491-f58b4c4fca72?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            </div>
                <img className='rounded-2xl w-full object-cover' src="https://images.unsplash.com/photo-1773332611476-6ec2ba68049f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            <div className='flex flex-col-reverse lg:flex-col gap-4  '>
                <img className='rounded-2xl h-full object-cover' src="https://plus.unsplash.com/premium_photo-1667857650445-357161ad4b23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
                <div className='px-8 pb-4 bg-[#FEECBA] rounded-2xl'>
                <h1 className='text-[5rem]'>2.3M</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae suscipit dolorum quisquam, ipsa enim aperiam unde a tempora doloribus ipsam.</p>
            </div>
            </div>
        </div>
  )
}

export default ImgContainer