import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'


import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../Redux/actions/TodosAction'
import { setTodo } from '../Redux/actions/TodoAction'

function InputTodo() {

    const todos = useSelector((state) => state.todos)
    const todo = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    return (
        <>
            <div className='text-center capitalize w-screen rounded-lg mx-auto text-center py-12'>
                <h1 className='bg-aqua text-blue-400 text-4xl'>تعداد کارها : <span class="inline-flex items-center justify-center px-2 pt-3 pb-2 text-sm font-bold leading-none text-red-100 bg-purple-600 rounded-full">{todos.length}</span> </h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <button type='submit' onClick={() => dispatch(addTodo(todo))} className='bg-transparent align-middle ml-2 mr-2 hover:text-purple-700 text-purple-800 focus:outline-none'><FontAwesomeIcon icon={faPlus} size='lg' /></button>
                    <input value={todo} onChange={(e) => dispatch(setTodo(e))} type="text" className="h-7 border border-transparent shadow-sm rounded-md focus:outline-none w-60 focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-10 focus:placeholder-0" placeholder='اضافه کردن کار' />
                </form>
            </div>
        </>


    )
}

export default InputTodo;

