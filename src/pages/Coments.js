import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import logo from '../component/image/bux.png'

export default function Coments() {

    const [coments, setcoments] = useState([])

    async function getcoments() {
        await axios({
            url: 'https://jsonplaceholder.typicode.com/comments',
            method: 'GET'
        })
            .then((response) => {
                console.log(response.data);
                setcoments(response.data)
            })
            .catch(() => {
                console.log('err');
            })
    }

    useEffect(() => {
        getcoments()
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-sky-200">

            <Header active='/Coments' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mt-10'>

                {coments.map((item) => {
                    return (
                        <div key={item.id} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300'>


                            <div className='p-4 flex flex-col gap-2'>

                                <p className='text-sm text-gray-500'>
                                    {item.postId}
                                </p>

                                <h1 className='font-bold text-lg line-clamp-2'>
                                    {item.id}
                                </h1>

                                <p className='text-sm text-blue-600 break-all'>
                                    {item.name}
                                </p>


                                <p className='text-sm text-blue-600 break-all'>
                                    {item.email}
                                </p>
                                 
                                 
                                <p className='text-sm text-blue-600 break-all'>
                                    {item.body}
                                </p>


                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}