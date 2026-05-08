import React from 'react'


export default function Todoscard(props) {
  return (
    <div className='w-[300px] rounded-2xl shadow-lg border p-5 bg-white hover:scale-105 duration-300'>

      <div className='flex flex-col gap-3'>

        <h2 className='text-xl font-bold text-gray-800'>
          {props.title}
        </h2>

        <p className='text-blue-600 font-semibold'>
          User ID: {props.userId}
        </p>

        <p className='text-gray-700'>
          Status:{' '}
          <span className={props.completed ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
            {props.completed}
          </span>
        </p>

      </div>

    </div>
  )
}