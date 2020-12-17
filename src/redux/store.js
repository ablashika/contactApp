
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import {AsyncStorage} from 'react-native'
import {persistStore, persistReducer} from 'redux-persist'


const persistConfig = {
    key:"root",
    storage:AsyncStorage
}

const persistedReducer = persistReducer (persistConfig, authReducer)
let store = createStore(persistedReducer, applyMiddleware(thunk))

let persistor = persistStore(store)


export {store, persistor};