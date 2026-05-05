import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import logo from '../component/image/image.png'
import fasfut from '../component/image/imagee.png'
import { NavLink } from 'react-router-dom'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header active='/' />

      <main className="flex-grow">

        <div className="max-w-6xl mx-auto mt-12 bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={logo} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">
              Mazali lahzalar shu yerdan boshlanadi! 🍔🍟
            </h2>
            <p className="text-gray-600 mb-6">
              Yangi tayyorlangan burgerlarimiz bilan tanishing...
            </p>

            {/* Button added */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Buyurtma berish
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">

          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <span className="text-3xl font-bold mb-4">Haqiqiy burger zavqi shu yerda! 🔥</span>
            <h1 className="text-gray-600 mb-6">
              Bir emas, bir nechta mazali tanlov! Shirali go‘shtli burgerlar, erib turgan pishloq va yangi sabzavotlar uyg‘unligi — har bir luqmada haqiqiy lazzatni his qilasiz. Yonida esa oltin rangda qarsildoq kartoshka fri va maxsus souslar — mukammal kombinatsiya!
            </h1>

            <div className="flex gap-4">

              <NavLink to="/product" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg inline-block">
                Menyuni ko'rish
              </NavLink>              <button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Savatga qo'shish
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <img src={fasfut} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

      </main>

      <Footer />

    </div>
  )
}