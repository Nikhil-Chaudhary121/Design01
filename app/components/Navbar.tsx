import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-6 justify-between border-b-2 border-[#f1f1f1] '>
        <p className='text-md tracking-wider'>FRAME-SUPPLY</p>
        <ul className='text-sm flex gap-4'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Navbar