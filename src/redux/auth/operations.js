import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export const registerOperation = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('users/signup', userData)
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)


        
    }
}
)


export const loginOperation = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('users/login', userData)
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)


        
    }
}
)