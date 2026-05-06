import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

// rasmlar import qilindi
import lavashImg from '../component/image/lavash.png'
import burger from '../component/image/burger.png'
import pizza from '../component/image/pizza.png'
import xodog from '../component/image/xoddok.png'
import fri from '../component/image/fri.png'
import cola from '../component/image/cola.png'


export default function Product() {

    const data = [
        {
            id: 1,
            img: burger,
            name: 'Burger',
            price: '30 000 so‘m',
            description: 'Mazali burger'
        },
        {
            id: 2,
            img: lavashImg,
            name: 'Lavash',
            price: '28 000 so‘m',
            description: 'Issiq va mazali'
        },
        {
            id: 3,
            img: pizza,
            name: 'Pizza',
            price: '45 000 so‘m',
            description: 'Cheesy pizza'
        },
        {
            id: 4,
            img: xodog,
            name: 'Hot Dog',
            price: '20 000 so‘m',
            description: 'Tez va mazali'
        },
        {
            id: 5,
            img: fri,
            name: 'Fri kartoshka',
            price: '15 000 so‘m',
            description: 'Qarsildoq'
        },
        {
            id: 6,
            img: cola,
            name: 'Cola',
            price: '10 000 so‘m',
            description: 'Sovuq ichimlik'
        }
    ]

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header active="/product" />

            <div className="max-w-6xl mx-auto px-4 py-10">

                {/* BUTTONLAR */}
                <div className="flex flex-wrap gap-4 justify-center p-6 bg-gray-100 rounded-2xl shadow-lg">

                    <button className="px-5 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
                        Burgerlar Bo‘limi
                    </button>

                    <button className="px-5 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
                        Lavashlar Bo‘limi
                    </button>

                    <button className="px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
                        Xot-doglar Bo‘limi
                    </button>

                    <button className="px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
                        Ichimliklar Bo‘limi
                    </button>

                </div>

                <h1 className="text-3xl font-bold text-center mb-8 mt-6">
                    Mahsulotlar
                </h1>

                {/* CARDLAR */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {data.map(item => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                            />

                            <div className="p-4">
                                <h2 className="text-xl font-semibold">
                                    {item.name}
                                </h2>

                                <p className="text-gray-500 text-sm">
                                    {item.description}
                                </p>

                                <div className="mt-3 flex justify-between items-center">
                                    <span className="text-orange-500 font-bold">
                                        {item.price}
                                    </span>

                                    <button className="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600">
                                        Buyurtma
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    )
}