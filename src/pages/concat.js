import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Contact() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <Header active='/contact' />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
          🍔 Biz bilan bog‘laning
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl mb-4 font-semibold">Aloqa ma'lumotlari</h2>
            <p className="mb-2">📍 Manzil: Buxoro shahri</p>
            <p className="mb-2">📞 Telefon: +998 90 777 77 77</p>
            <p className="mb-2">📧 Email: fastfood@gmail.com</p>

            <div className="mt-6 text-gray-600">
              <p>
                Buyurtma berish yoki savollar uchun bizga yozing.
                Eng mazali fast foodlar sizni kutmoqda!
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2">Ismingiz</label>
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Telefon</label>
              <input
                type="text"
                placeholder="+998..."
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Buyurtma / Xabar</label>
              <textarea
                rows="4"
                placeholder="Masalan: 2 ta burger, 1 cola..."
                className="w-full px-3 py-2 border rounded"
              ></textarea>
            </div>

            <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
              Yuborish 🍟
            </button>
          </form>

        </div>
      </div>

      <Footer />
    </div>
  )
}