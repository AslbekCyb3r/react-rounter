import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function product() {
    return (
        <div>
            <Header active='/product' />
             <Footer/>
            <h1 className='text-2xl mt-60 text-red-500 '>men product man</h1>
        </div>
    )
}