'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
const text =
  ' Odit vitae illum voluptates, deserunt quo quaeratmagni placeat et similique distinctio natus nesciunt laborumaliquam eveniet nostrum necessitatibus assumenda. Ipsam,ratione in. Tenetur impedit facere quibusdam, et fugitplaceat temporibus expedita maiores dicta nobis optio culpa fugitfuga non. Recusandae numquam autem, natus, asperiores velassumenda aspernatur deleniti voluptas aut praesentium quam,quae nesciunt maiores beatae molestiae odio! Non itaquepariatur reprehenderit, blanditiis sit aspernatur,consectetur veritatis quibusdam, accusamus excepturi eiusmollitia alias magni voluptatum! Impedit, est delenitifacere illo, molestiae quia sunt soluta repellendus hicmagni aliquid aliquam sint labore, recusandae officiis cumenim! Obcaecati deleniti maiores beatae, vero dolorum eaque,delectus reiciendis perferendis distinctio voluptatem facerenesciunt minus perspiciatis quis ullam eum'
const item = [
  {
    image: '/p1.png',
    text: text,
    star: '/star.png',
    title: 'illum voluptates, deserunt ',
    decryption: 'illum voluptates, deserunt '
  },
  {
    image: '/p2.png',
    text: text,
    star: '/star.png',
    title: 'illum voluptates, deserunt ',
    decryption: 'illum voluptates, deserunt '
  },
  {
    image: '/p1.png',
    text: text,
    star: '/star.png',
    title: 'illum voluptates, deserunt ',
    decryption: 'illum voluptates, deserunt '
  },
  {
    image: '/p2.png',
    text: text,
    star: '/star.png',
    title: 'illum voluptates, deserunt ',
    decryption: 'illum voluptates, deserunt '
  },
  {
    image: '/p1.png',
    text: text,
    star: '/star.png',
    title: 'illum voluptates, deserunt ',
    decryption: 'illum voluptates, deserunt '
  },
  {
    image: '/p2.png',
    text: text,
    star: '/star.png',
    title: 'illum voluptates, deserunt ',
    decryption: 'illum voluptates, deserunt '
  },
  {
    image: '/p1.png',
    text: text,
    star: '/star.png',
    title: 'illum voluptates, deserunt ',
    decryption: 'illum voluptates, deserunt '
  }
]
function findSize (index: number, currentSlide: number) {
  if (index === currentSlide) {
    return 120
  }
  return 75
}
export default function TestimonialsSlider () {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged (slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created () {},
    loop: true,
    slides: { perView: 5, spacing: 5, origin: 'center' }
  })

  return (
    <>
      <div className='flex justify-center gap-7 -mb-28 w-[60%]'>
        <div
          className='mt-[37px]'
          onClick={(e: any) => {
            e.stopPropagation() || instanceRef.current?.prev()
          }}
        >
          <Image alt='' width={40} height={40} src={'/arrow.png'} />
        </div>
        <div ref={sliderRef} className='keen-slider'>
          {item.map((item: any, index: number) => {
            const size = findSize(index, currentSlide)
            return (
              <div
                className={` keen-slider__slide flex items-center justify-center relative h-[680px] `}
                key={index}
                style={{ overflow: 'visible' }}
              >
                <div className='flex justify-center items-center self-start'>
                  <Image
                    alt=''
                    src={item.image}
                    width={size}
                    height={size}
                    style={index === currentSlide ? { marginTop: '5px' } : {}}
                    className={`!min-h-[${size}] !min-w-[${size}] !max-h-[${size}] !max-w-[${size}] mt-5 rounded-full bg-black`}
                  />
                </div>
                <div
                  data-keen-slider-clickable
                  className='absolute flex flex-col-reverse items-center bg-violet-700 p-10 pb-20 rounded-2xl min-w-[650px] min-h-96 *:text-center *:text-white *:rotate-180 rotate-180'
                  style={
                    currentSlide !== index
                      ? { display: 'none' }
                      : {
                          clipPath:
                            'polygon(0% 0%, 100% 0%, 100.1% 89.4%, 54.3% 89.1%, 50.2% 100.3%, 45.5% 89.4%, 0% 89.1%)'
                        }
                  }
                >
                  <p data-keen-slider-clickable className='text-xs'>
                    {item.text}
                  </p>
                  <Image src={item.star} alt='' width={100} height={100} />
                  <p data-keen-slider-clickable className=''>
                    {item.title}
                  </p>

                  <p data-keen-slider-clickable className='text-xs'>
                    {item.decryption}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <div
          className='mt-[37px]'
          onClick={(e: any) => {
            e.stopPropagation() || instanceRef.current?.next()
          }}
        >
          <Image
            alt=''
            width={40}
            height={40}
            src={'/arrow.png'}
            className='rotate-180'
          />
        </div>
      </div>
    </>
  )
}
