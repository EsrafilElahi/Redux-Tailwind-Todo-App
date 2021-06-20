import React from 'react'
import InputTodo from './components/InputTodo'
import Todos from './components/Todos'
import {showTodos} from './Redux/actions/ShowTodosAction'
import {useDispatch, useSelector} from 'react-redux'
import './App.css'


function App() {

    const dispatch = useDispatch();
    const show = useSelector((state) => state.show)

    return ( 
        <div className='cent'>
            <InputTodo />
            
            <button className='btn mr-auto h-10 px-5 mt-5 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700' onClick={() => dispatch(showTodos())}>نمایش | مخفی</button>

            {show ? <Todos/> : null}

        </div>
    );
}

export default App;