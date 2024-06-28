import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";



const rootReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
};


export const store = configureStore({
    reducer: rootReducer,
     
})


 
