import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'


function Todo({ todoName, deleted }) {
    return (
        <div className='py-2 my-3 px-3 mx-auto flex justify-between border border-indigo-600 w-60'>
            <p>{todoName}</p>
            <FontAwesomeIcon onClick={deleted} className='hover:text-purple-700 text-purple-800 cursor-pointer' icon={faTrash} size='lg' />
        </div>
    )
}

export default Todo
