import Image from 'next/image'
import React from 'react'

export default function Hero () {
  return (
    <div className='w-full h-[350px] bg-hero flex flex-col items-center mt-10'>
      <div className='flex flex-col items-center '>
        <span className='text-8xl'>Search,App&</span>
        <br />
        <span className='text-8xl'>
          Get Your<span className='text-pink-500'> Dream Job</span>
        </span>
        <div className='w-2/3 text-center'>
          <br />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            fugiat numquam dignissimos, recusandae eveniet accusantium
          </span>
        </div>
          <br/>

          <div className='flex items-center gap-16'>
            <button className='w-24 h-10 bg-violet-700 text-white rounded-md border'>
              lorem...
            </button>
            <div className='flex items-center gap-4'>
              <Image src={'/play.png'} width={30} height={30} alt='' />
              <strong> Lorem ipsum dolor ?</strong>
            </div>
          </div>
      </div>
    </div>
  )
}
