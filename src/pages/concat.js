import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Concat() {
    return (
        <div>
            <div>
                <Header active='/concat' />
                <Footer />
                <h1 className='text-2xl mt-60 text-red-500 '>men concat man</h1>
            </div>
        </div>
    )
}
