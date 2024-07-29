// eslint-disable-next-line no-unused-vars
// import { useState } from 'react'
// import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <div className='flex justify-center items-center h-screen w-full bg-gray-600'>
    <div className='w-96 mx-auto text-center'> 
    <h1>Learn About redux toolkit</h1>
    <AddTodo/>
    <Todos/>
    </div>
    </div>
    </>
  )
}

export default App
