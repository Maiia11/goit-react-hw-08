import { createSlice } from "@reduxjs/toolkit";
import { loggOutOperation, loginOperation, registerOperation, currentOperation } from "./operations";


const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    }, extraReducers: builder => {
        builder
        .addCase(registerOperation.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;

        })
        .addCase(loginOperation.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;

            })
   
    .addCase(loggOutOperation.fulfilled, (state) => {
        state.user = {
            name: null,
            email: null,
        };
            state.token = null;
            state.isLoggedIn = false;

    })
            .addCase(currentOperation.pending, (state) => {
        state.isRefreshing = true;

         })
            .addCase(currentOperation.fulfilled, (state, {payload}) => {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            
         })
           
        .addCase(currentOperation.rejected, (state) => {
            state.token = null;
            state.isRefreshing = false;
        })
            
    
    }

 })

export const authReducer = authSlice.reducer