import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from './reducers/videos'

// const store = createStore(reducer, {
//     categoryList: [],
//     suggestionList: [],
// })
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['selectedMovie']
  }

const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(persistedReducer)
// const persistor = persistStore(store)

// export {store,persistor}

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);