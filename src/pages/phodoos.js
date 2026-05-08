import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import logo from '../component/image/bux.png'

export default function Phodoos() {

    const [photos, setphotos] = useState([])

    async function getusers() {
        await axios({
            url: 'https://jsonplaceholder.typicode.com/photos',
            method: 'GET'
        })
            .then((response) => {
                console.log(response.data);
                setphotos(response.data)
            })
            .catch(() => {
                console.log('err');
            })
    }

    useEffect(() => {
        getusers()
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-sky-200">

            <Header active='/Phodoos' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mt-10'>

                {photos.map((item) => {
                    return (
                        <div key={item.id} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300'>

                            <img src={logo} alt={item.title} className='w-full h-52 object-cover'/>

                            <div className='p-4 flex flex-col gap-2'>

                                <p className='text-sm text-gray-500'>
                                    Album ID: {item.albumId}
                                </p>

                                <h1 className='font-bold text-lg line-clamp-2'>
                                    {item.title}
                                </h1>

                                <p className='text-sm text-blue-600 break-all'>
                                    {item.thumbnailUrl}
                                </p>



                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}