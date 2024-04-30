import React from 'react'
import TestimonialsSlider from './TestimonialsSlider'

export default function Testimonials () {
  return (
    <div className='flex flex-col justify-center items-center gap-10 mt-20 px-9 w-full'>
      <p className='font-extrabold text-5xl text-center'>Testimonials</p>
      <p className='w-1/2 text-center text-sm leading-7'>
        Lorem ipsum dolor , sit amet consectetur adipisicing elit. sit modi
        facilis sequi cum excepturi repudiandae eveniet nostrum tempore
        perferendis facere repellendus accusamus reiciendis,
      </p>
      <TestimonialsSlider/>
    </div>
  )
}
