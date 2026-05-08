import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../component/image/thesheflogo.png'

export default function Header({ active }) {
  return (
    <div className=' relative top-4 bg-white shadow-2xl px-6 py-3 p-4 flex items-center justify-between w-6xl m-auto rounded-2xl'>


      <div className='flex items-center gap-3 '>
        <img src={logo} alt="logo" className='w-44 h-20 object-cover rounded-full' />
        <h1 className='text-xl font-bold text-gray-800'></h1>
      </div>


      <div className='flex gap-6 text-lg font-medium'>
        <Link to="/" className={active === "/" ? "text-blue-500 font-bold border-b-4" : ""}>Users</Link>
        <Link to="/Todos" className={active === "/Todos" ? "text-blue-500 font-bold border-b-4" : ""}>
          Todos
        </Link>        <Link to="/product" className={active === "/product" ? "text-blue-500 font-bold border-b-4" : ""}>Product</Link>
        <Link to="/concat" className={active === "/concat" ? "text-blue-500 font-bold border-b-4" : ""}>concat</Link>

      </div>



    </div>
  )
}