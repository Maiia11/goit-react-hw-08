import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
 
 
const persistConfig = {
  key: 'auth',
  storage,
 whitelist: ['token'] 
}
 
const authPersistedReducer = persistReducer(persistConfig, authReducer)

const rootReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: authPersistedReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
     
})

 export const persistor = persistStore(store)




 
