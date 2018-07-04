/* import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store; */

import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}
// this is a sample

const persistedReducer = persistReducer(persistConfig, rootReducer)


export  let store = createStore(persistedReducer, applyMiddleware(thunk))
export  let persistor = persistStore(store)

