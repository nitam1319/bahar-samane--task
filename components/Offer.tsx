import Image from 'next/image'
import React from 'react'
const items = [
  {
    number: '/1.png',
    img: '/office1.jpg',
    title: 'Design ',
    description:
      'Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor'
  },
  {
    number: '/2.png',
    img: '/office2.jpg',
    title: 'Sales',
    description:
      'Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor'
  },
  {
    number: '/3.png',
    img: '/office3.jpg',
    title: 'Market',
    description:
      'Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor'
  }
]
export default function Offer () {
  return (
    <div className='flex flex-col justify-center gap-10 mt-20 px-9 w-full *:transition-all'>
      <p className='font-extrabold text-5xl'>And Job Options</p>
      <span className='w-1/2 text-sm leading-7'>
        Lorem ipsum dolor , sit amet consectetur adipisicing elit. sit modi
        facilis sequi cum excepturi repudiandae eveniet nostrum tempore
        perferendis facere repellendus accusamus reiciendis,
      </span>
      <div className='flex justify-between'>
        {items.map((item, index) => (
          <div key={index} className='flex flex-col gap-2 max-w-[420px] h-[400px] group'>
            <div className='rounded-lg w-[441px] h-52 overflow-y-hidden'>
              <Image
                alt=''
                src={item.img}
                width={200}
                height={100}
                className='group-hover:scale-110 rounded-lg w-[420px] h-52 transition-all'
              />
            </div>
            <div className='flex'>
              <Image
                alt=''
                src={item.number}
                width={100}
                height={100}
                className='group-hover:w-20 group-hover:h-20 w-10 h-10'
              />
              <br />
              <div className='border-sky-800 pl-4 border-l-4'>
                <p className='font-bold'>{item.title}</p>
                <span className='group-hover:block hidden opacity-0 group-hover:opacity-100 w-full text-sm transition-all'>{item.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
