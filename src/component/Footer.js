import React from 'react'
import logo from './image.png'

export default function Footer() {
    return (
        <div className=' absolute bottom-2 w-7xl bg-white shadow-2xl flex items-center justify-between px-6 py-3 ml-40 rounded-2xl'>

            <div className='w-24'>
                <img src={logo} alt="" />
            </div>

            <div className='flex gap-4'>
                <h1>sayt</h1>
                <h1>sayt</h1>
                <h1>sayt</h1>

            </div>

        </div>
    )
}