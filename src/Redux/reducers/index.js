import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { showReducer } from './ShowReducer'
import { todoReducer } from './TodoReducer'
import { todosReducer } from './TodosReducer'


const rootReducer = combineReducers({
    show: showReducer,
    todo: todoReducer,
    todos: todosReducer
})

const configReducer = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(configReducer, rootReducer)



export default persistedReducer;