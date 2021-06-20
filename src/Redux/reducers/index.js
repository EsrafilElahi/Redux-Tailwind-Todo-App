import { combineReducers } from "redux";
import {showReducer} from './ShowReducer'
import {todoReducer} from './TodoReducer'
import {todosReducer} from './TodosReducer'


const rootReducer = combineReducers({
    show: showReducer,
    todo: todoReducer,
    todos: todosReducer
})

export default rootReducer;