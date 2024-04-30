import Image from 'next/image'
import React from 'react'
const items = [
  {
    icon: '/account.png',
    title: 'Create an Account ',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!'
  },
  {
    icon: '/search.png',
    title: 'Search Job',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!'
  },
  {
    icon: '/cv.png',
    title: 'Upload CV/ Resume',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!'
  },
  {
    icon: '/job.png',
    title: 'Get Job',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!'
  }
]
export default function QuickEasy () {
  return (
    <div className='flex flex-col items-center gap-6 mt-40'>
      <div className='flex'>
        <p className='font-extrabold text-5xl'>Get Hired in </p>
        <p className='font-extrabold text-5xl text-violet-700'> 4 Quick Easy Setups</p>
      </div>
      <span className='w-1/2 font-bold text-center text-xs leading-7' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error
        aliquam repellat voluptatibus laboriosam possimus, voluptates fugit,
        necessitatibus aspernatur nulla odit, enim provident eveniet sapiente
        hic amet ut quia nemo.
      </span>
      <div className='flex justify-center gap-9 h-96'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col gap-5 shadow-2xl px-5 pt-10 border rounded-xl w-80 h-72 self-end'
            style={index % 2 === 0 ? { alignSelf: 'center' } : {}}
          >
            <Image alt='' src={item.icon} width={60} height={60} />
            <strong>{item.title}</strong>
            <span className='text-xs'>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
