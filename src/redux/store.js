import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './contactsSlice'
import filterSlice from './filterSlice'
import authSlice from './auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
    
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'token',
  storage,
  whitelist:['token']
}
const authReducer=persistReducer(persistConfig,authSlice)
export const store = configureStore({
  reducer: {
  contacts: contactsSlice,
  filter: filterSlice,
  auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
   
})

const persistor = persistStore(store)
export default persistor


