import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import logo from '../component/image/image.png'
import fasfut from '../component/image/imagee.png'
import { NavLink } from 'react-router-dom'
import axios from "axios";
import Cardusers from './cardusers'

export default function Home() {

  const [users, setusers] = useState([])

  async function getusers() {
    await axios({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET'
    }).then((response) => {
      console.log(response.data);
      setusers(response.data)

    }).catch(() => {
      console.log('err');
    })
  }

  useEffect(() => {
    getusers()
  }, [])

  return (
<div className="flex flex-col min-h-screen bg-sky-200">

  <Header active='/' />

  <div className='grid grid-cols-4 gap-5 p-5 justify-items-center mt-10'>
    {users.map((item) => {
      return (
        <Cardusers
          key={item.id}
          id={item.id}
          name={item.name}
          username={item.username}
          email={item.email}
        />
      )
    })}
  </div>

</div>
  )
}