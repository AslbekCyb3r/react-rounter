import React from 'react'
import logo from '../component/image/thesheflogo.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <img src={logo} alt="logo" className="w-36 mb-4" />
          <p className="text-gray-400 text-sm">
            Eng mazali fastfoodlar bizda! Tez yetkazib berish va sifatli xizmat.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-orange-500">Bo‘limlar</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink to="/product" className="hover:text-orange-500">🍟 Menyu</NavLink>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">🔥 Eng mashhurlar</li>
            <li className="hover:text-orange-500 cursor-pointer">🎁 Chegirmalar</li>
            <li className="hover:text-orange-500 cursor-pointer">🚚 Yetkazib berish</li>
            <li className="hover:text-orange-500 cursor-pointer">📞 Aloqa</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-orange-500">Aloqa</h2>
          <p className="text-gray-400 text-sm">📍 Buxoro, O‘zbekiston</p>
          <p className="text-gray-400 text-sm">📞 +998 90 123 45 67</p>
          <p className="text-gray-400 text-sm">✉ info@theshef.uz</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © 2026 The Shef. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  )
}