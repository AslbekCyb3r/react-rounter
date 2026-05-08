import React from 'react'

export default function Cardusers(props) {
  return (
    <div className=' w-[300px] rounded-2xl shadow-lg border p-5 bg-white hover:scale-105 duration-300'>

      <div className='flex flex-col gap-2 '>

        <h1 className='text-2xl font-bold text-blue-600'>
          {props.name}
        </h1>

        <p className='text-gray-700'>
          <span className='font-semibold'>Username:</span> {props.username}
        </p>

        <p className='text-gray-700'>
          <span className='font-semibold'>Email:</span> {props.email}
        </p>

        <p className='text-gray-500'>
          ID: {props.id}
        </p>

      </div>

    </div>
  )
}