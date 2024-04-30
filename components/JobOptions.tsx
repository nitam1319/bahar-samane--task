import Image from 'next/image'
import React from 'react'
const items = [
  {
    icon: '/figma.png',
    iconTitle: 'Figma',
    iconDescription: 'lorem',
    title: ' Lorem, ipsum dolor. ',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!',
    tags: ['Tag1', 'Tag2', 'Tag3']
  },
  {
    icon: '/google.png',
    iconTitle: 'Google',
    iconDescription: 'lorem',
    title: ' Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!',
    tags: ['Tag1', 'Tag2', 'Tag3']
  },
  {
    icon: '/linkedin.png',
    iconTitle: 'Linkedin',
    iconDescription: 'lorem',
    title: ' Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!',
    tags: ['Tag1', 'Tag2', 'Tag3']
  },
  {
    icon: '/twitter.png',
    iconTitle: 'Twitter',
    iconDescription: 'lorem',
    title: ' Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!',
    tags: ['Tag1', 'Tag2', 'Tag3']
  },
  {
    icon: '/figma.png',
    iconTitle: 'Figma',
    iconDescription: 'lorem',
    title: ' Lorem, ipsum dolor. ',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!',
    tags: ['Tag1', 'Tag2', 'Tag3']
  },
  {
    icon: '/google.png',
    iconTitle: 'Google',
    iconDescription: 'lorem',
    title: ' Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum totam reiciendis atque officiis ut, dicta libero tempora eius excepturi, ullam voluptates? Doloribus consequatur a vitae totam! Fuga tempore fugit mollitia!',
    tags: ['Tag1', 'Tag2', 'Tag3']
  }
]
export default function JobOptions () {
  return (
    <div className='flex flex-col justify-center gap-10 mt-20 px-9 w-full'>
      <div className='flex w-10/12'>
        <p className='font-extrabold text-5xl text-violet-700'>
          Latest and Top{' '}
        </p>
        <p className='font-extrabold text-5xl'>And Job Options</p>
      </div>
      <div className='flex justify-between items-center'>
        <span className='w-1/2 text-sm leading-7'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit modi
          facilis sequi cum excepturi repudiandae eveniet nostrum tempore
          perferendis facere repellendus accusamus reiciendis, ad consequuntur,
          unde eaque.
        </span>
        <button className='border-violet-700 shadow-md px-5 border rounded-md h-10 text-violet-700'>
          View All Jobs
        </button>
      </div>
      <div className='flex flex-wrap justify-between gap-x-5 gap-y-10 w-full'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center gap-3 hover:bg-violet-700 shadow-2xl px-5 py-5 border rounded-xl w-[32%] h-60 hover:text-white group'
          >
            <div className='flex gap-4'>
              <Image alt='' src={item.icon} width={60} height={60} />
              <div>
                <p className='font-bold text-lg'>{item.iconTitle}</p>
                <p className='text-md'>{item.iconDescription}</p>
              </div>
            </div>
            <strong>{item.title}</strong>
            <span className='line-clamp-2 text-xs'>{item.description}</span>
            <div className='flex gap-2'>
              {item.tags.map((item, index) => (
                <span
                  key={index}
                  className='group-hover:bg-violet-900 bg-red-500 bg-opacity-10 px-3 py-0.5 rounded font-medium text-xs text-yellow-800 dark:text-red-500 me-2'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
