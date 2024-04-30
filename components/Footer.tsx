import Image from 'next/image'
import React from 'react'

export default function Footer () {
  return (
    <div className='relative flex justify-center items-end w-full h-[700px]'>
      <div className='right-auto bottom-64 absolute flex bg-slate-800 px-20 rounded-xl w-2/3 h-[250px]'>
        <div className='flex flex-col justify-center gap-3 w-80 h-full text-white'>
          <p className='font-bold text-4xl'>Get Latest Job Update</p>
          <span className='text-xs'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            iure laudantium hic, cupiditate
          </span>
          <div className='mt-3 px-2'>
            <div className='relative flex items-center max-w-80 group'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                aria-hidden='true'
                className='group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400 left-3 absolute inset-y-0 w-6 h-full text-slate-400 pointer-events-none'
              >
                <path d='M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z'></path>
                <path d='m6 7 6 5 6-5'></path>
              </svg>
              <input
                type='email'
                className='block bg-transparent shadow py-2 pr-3 pl-12 border border-transparent rounded-md w-full text-white placeholder:text-slate-400 sm:text-sm leading-5 appearance-none ring-1 ring-slate-900/5 focus:outline-none focus:ring-2 focus:ring-violet-500 ring-white'
                placeholder='Enter your email'
              ></input>
              <button
                type='submit'
                className='right-1 absolute flex-auto border-y bg-white hover:bg-violet-700 shadow px-2 py-1 border-transparent rounded-md font-semibold text-sm text-violet-700 hover:text-white'
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <Image
          alt=''
          src={'/man.png'}
          width={250}
          height={700}
          className='right-20 bottom-0 absolute'
        />
      </div>
      <div className='flex flex-col justify-end items-center bg-slate-200 w-full h-[350px]'>
        <div className='flex justify-between w-10/12 h-1/2'>
          <div className='w-1/3'>
            <div className='flex'>
              <p className='text-3xl text-violet-700'>Job</p>
              <p className='text-3xl text-orange-600'>Hunt</p>
            </div>
            <br />
            <p className='text-gray-700 text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              autem deserunt mollitia iste, quisquam rerum dolorum quibusdam!
              Nesciunt inventore eum in voluptatum, fuga eius laudantium, dolore
              officia totam quam harum!
            </p>
          </div>
          <ul className='flex flex-col gap-2'>
            <strong>title</strong>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
           <ul className='flex flex-col gap-2'>
            <strong>title</strong>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
           <ul className='flex flex-col gap-2'>
            <strong>title</strong>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
           <ul className='flex flex-col gap-2'>
            <strong>title</strong>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
        </div>
        <div className='flex justify-between items-center border-t-[1px] border-t-slate-600 w-10/12'>
          <p className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet.</p>
          <p className='text-gray-500 text-xs'>Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  )
}
