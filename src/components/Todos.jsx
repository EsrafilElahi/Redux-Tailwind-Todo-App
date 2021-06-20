import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './Todo'
import { deleteTodo } from '../Redux/actions/TodosAction'
import {clearTodos} from '../Redux/actions/TodosAction'
import '../App.css'

function Todos() {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()


    return (
        <div className='text-center mt-20'>
            <h1>لیست کارها :</h1><hr className='hr m-3' />
            {
                todos.map((item) => <Todo key={item.id} todoName={item.todoName} deleted={() => dispatch(deleteTodo(item.id))} />)
            }
            <button className='text-center h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800 mt-5' onClick={()=> dispatch(clearTodos())}>پاک کردن لیست</button>
        </div>
    )
}

export default Todos
