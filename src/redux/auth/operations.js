import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export const registerOperation = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('users/signup', userData)
        console.log(data);
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)


        
    }
}
)