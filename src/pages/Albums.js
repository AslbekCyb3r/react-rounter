import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../component/Header';

export default function Albums() {

    const [albums, setAlbums] = useState([])

    async function getAlbums() {
        try {
            const response = await axios({
                url: 'https://jsonplaceholder.typicode.com/albums',
                method: 'GET'
            })

            console.log(response.data);
            setAlbums(response.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAlbums()
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-sky-200">
            <h1>albums</h1>

            <Header active='/Albums' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mt-10'>

                {albums.map((item) => (
                    <div
                        key={item.id}
                        className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300'
                    >

                        <div className='p-4 flex flex-col gap-2'>

                            <p className='text-sm text-gray-500'>
                                ID: {item.id}
                            </p>

                            <p className='text-sm text-gray-500'>
                                User ID: {item.userId}
                            </p>

                            <h1 className='font-bold text-lg line-clamp-2'>
                                {item.title}
                            </h1>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}