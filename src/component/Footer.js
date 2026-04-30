import React from 'react'
import logo from './image.png'

export default function Footer() {
 return (
    <footer className="bg-white shadow-lg mt-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* logo */}
        <div className="w-20">
          <img src={logo} alt="logo" />
        </div>

        {/* menu */}
        <div className="flex gap-6 text-gray-600 font-medium">
          <h1 className="hover:text-orange-500 cursor-pointer">Sayt</h1>
          <h1 className="hover:text-orange-500 cursor-pointer">Menu</h1>
          <h1 className="hover:text-orange-500 cursor-pointer">Aloqa</h1>
        </div>

      </div>
    </footer>
  )
}