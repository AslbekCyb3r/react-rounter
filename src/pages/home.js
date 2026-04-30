import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import logo from '../component/image/image.png'
import fasfut from '../component/image/imagee.png'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header active='/' />

      {/* MAIN */}
      <main className="flex-grow">

        <div className="max-w-6xl mx-auto mt-12 bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={logo} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">
              Mazali lahzalar shu yerdan boshlanadi! 🍔🍟
            </h2>
            <p className="text-gray-600">
              Yangi tayyorlangan burgerlarimiz bilan tanishing...
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">


          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">
              Mazali lahzalar shu yerdan boshlanadi! 🍔🍟
            </h2>
            <p className="text-gray-600">
              Yangi tayyorlangan burgerlarimiz bilan tanishing...
            </p>
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