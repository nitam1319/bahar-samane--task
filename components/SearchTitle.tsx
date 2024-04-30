import React from 'react'

const SearchItems = [
  'Lorem',
  'ipsum.Lorem.Lorem',
  'ipsum.Lorem.Lorem',
  'ipsum dolor',
  'Lorem',
  'ipsum.Lorem.Lorem',
  'ipsum dolor',
  'Lorem',
  'ipsum.Lorem.Lorem',
  'ipsum dolor',
  'ipsum dolor',
  'Lorem',
  'Lorem',
  'ipsum dolor',
  'Lorem',
  'ipsum.Lorem.Lorem',
  'ipsum.Lorem.Lorem',
  'ipsum dolor',
  'ipsum.Lorem.Lorem',
  'Lorem',
  'ipsum.Lorem.Lorem',
  'ipsum dolor',
  'Lorem',
]
export default function SearchTitle () {
  return (
    <div className='mt-40 w-full overflow-x-auto' style={{ scrollbarWidth: 'none' }}>
      <div className='flex flex-wrap justify-center gap-4 w-[1640px]'>
        {SearchItems.map((item, index) => (
        < div key={index} className='flex items-center'>
            <input
              type='checkbox'
              id={`react-option${index}`}
              value=''
              className='hidden peer'
            />
            <label
              htmlFor={`react-option${index}`}
              className='justify-between items-center border-2 peer-checked:border-violet-700 bg-white visited:bg-black px-3 py-2 border-black rounded-3xl font-bold text-black text-center peer-checked:text-violet-700 cursor-pointer'
            >

                {item}
           
            </label>
            
          </div>
        ))}
      </div>
    </div>
  )
}
