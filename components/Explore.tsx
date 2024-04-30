import Image from 'next/image'
import React from 'react'

const items = [
  {
    icon: '/account.png',
    title: 'Design ',
    description: 'Lorem ipsum dolor'
  },
  {
    icon: '/search.png',
    title: 'Sales',
    description: 'Lorem ipsum dolor'
  },
  {
    icon: '/cv.png',
    title: 'Market',
    description: 'Lorem ipsum dolor'
  },
  {
    icon: '/job.png',
    title: 'Finance',
    description: 'Lorem ipsum dolor'
  },
  {
    icon: '/account.png',
    title: 'Design ',
    description: 'Lorem ipsum dolor'
  },
  {
    icon: '/search.png',
    title: 'Sales',
    description: 'Lorem ipsum dolor'
  },
  {
    icon: '/cv.png',
    title: 'Market',
    description: 'Lorem ipsum dolor'
  },
  {
    icon: '/job.png',
    title: 'Finance',
    description: 'Lorem ipsum dolor'
  }
]
export default function Explore () {
  return (
    <div className='flex flex-col items-center gap-14 mt-40 w-full'>
      <div className='w-2/3'>
        <p className='font-extrabold text-5xl text-violet-700'>
          Countless Career Options
          <span className='text-black'> Are Waiting</span>
        </p>
        <br />
        <p className='font-extrabold text-5xl text-center'>
          {' '}
          For You to Explore
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-x-4 gap-y-7 w-full'>
        {items.map((item, index) => (
          <div
            key={index}
            className='bg-white hover:bg-violet-700 shadow-2xl px-5 py-8 border rounded-xl w-[330px] h-52 hover:text-white'
          >
            <div className='flex justify-center items-center bg-gray-100 bg-opacity-50 rounded-xl w-20 h-20'>
              <Image alt='' src={item.icon} width={60} height={60} />
            </div>
            <br />
            <strong>{item.title}</strong>
            <p className='text-xs'>{item.description}</p>
          </div>
        ))}
      </div>
      <button className='bg-violet-700 px-5 border rounded-md h-10 text-white'>
        View All Countless
      </button>
    </div>
  )
}
