import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div>
      <Header active='/'/>
      <Footer/>
      <h1 className='text-2xl mt-60 text-red-500 '>men home page man</h1>
    </div>
  )
}