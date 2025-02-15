import { createSelector, createSlice, } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../contacts/operations";
import { selectContacts } from "./selectors";
import { selectFilters } from "../filters/selectors";
import { loggOutOperation } from "../auth/operations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true;
            
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(deleteContact.pending, (state) => {
                state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.items.findIndex(task => task.id === action.payload.id);
            state.items.splice(index, 1);
           
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(loggOutOperation.fulfilled, (state) =>  {
            state.items = []
           
        })

        
    }
    
})

export const contactsReducer = contactsSlice.reducer;

export const filteredContacts = createSelector([selectContacts, selectFilters], (contacts, filters) => {
    return contacts?.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()) || contact.number.toLowerCase().includes(filters.toLowerCase())
   );
    
})