/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { FaTrashAlt } from "react-icons/fa";
import { TiFolderAdd } from "react-icons/ti";



const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>
      <div>Todos</div>
      <ul className='list-none'>
        {todos.map((todo) => (
          <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded' key={todo.id}>
            <div className='text-white'>{todo.text}</div>
            <div className='flex justify-center items-center gap-2'>
            <button onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none rounded text-lg hover:bg-red-600'><TiFolderAdd /></button>
            <button onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none rounded text-md hover:bg-red-600'><FaTrashAlt /></button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos