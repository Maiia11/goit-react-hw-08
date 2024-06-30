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
            .addCase(currentOperation.fulfilled, (state, {payload}) => {
            state.user = payload;
            state.isLoggedIn = true;

         })
           
        .addCase(currentOperation.rejected, (state) => {
            state.token = null;
            })
    
    }

 })

export const authReducer = authSlice.reducer