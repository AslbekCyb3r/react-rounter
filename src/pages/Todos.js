import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../component/Header'
import Todoscard from './cardusers'

export default function About() {
  const [users, setUsers] = useState([])

  async function getTodos() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setUsers(response.data)
    } catch (error) {
      console.log('err', error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      <Header active="/Todos" />

      <div className="grid grid-cols-4 gap-5 p-5 justify-items-center mt-10">
        {users.map((item) => (
          <Todoscard
            key={item.id}
            userId={item.userId}
            title={item.title}
            completed={item.completed}
          />
        ))}
      </div>
    </div>
  )
}