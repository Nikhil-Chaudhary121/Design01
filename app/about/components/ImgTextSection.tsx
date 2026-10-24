import React from 'react'
import { CircleCheck } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';

const ImgTextSection = () => {
  return (
    <div className='flex flex-col-reverse gap-8 xl:flex-row w-full justify-between'>
        <div className=' flex flex-col gap-8'>
            <p className='text-[3.35rem] leading-[3.6rem]'>Transforming customer <br />
            Engagements with Ai.</p>
            <p className='text-[1rem] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore  <br />mollitia assumenda id iure illo voluptatum cupiditate adipisci <br /> molestias ipsa perferendis?</p>
            <div className='flex flex-col gap-2'>
                <p className='flex gap-2 items-center'>  <CircleCheck /> Some random checkpoint 1</p>
                <p className='flex gap-2 items-center'>  <CircleCheck /> Some random checkpoint 2</p>
                <p className='flex gap-2 items-center'>  <CircleCheck /> Some random checkpoint 3</p>
            </div>
            <button className=' text-white bg-black lg:w-fit w-full  p-4 rounded-[2rem]  flex gap-3 m-auto justify-center'>Get 14 Days Free Trial <CircleArrowRight/>  </button>
        </div>
        <img className='lg:h-[50vh] h-[30vh] rounded-xl object-cover' src="https://plus.unsplash.com/premium_photo-1661930023418-357b8c2dfb10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
    </div>
  )
}

export default ImgTextSection