import Image from 'next/image'
import React from 'react'

export default function Header () {
  return (
    <div className='w-full h-20 flex justify-between px-10 items-center'>
      <div><span className='text-3xl text-violet-700'>Job</span><span className='text-3xl text-orange-600'>Hunt</span></div>
      <div className=' flex gap-5'>
        <button>Home</button>
        <button>About</button>
        <button>Jobs</button>
        <button>Services</button>
        <button>Contact Us</button>
        <button className='w-24 h-10  rounded-md border'>Login</button>
        <button className='w-24 h-10 bg-violet-700 text-white rounded-md border'>
          Register
        </button>
      </div>
    </div>
  )
}
