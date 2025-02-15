import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
const setHeaderToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    
}

const clearHeaderToken = () => {
    delete axios.defaults.headers.common['Authorization']; 
    
}

export const registerOperation = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('users/signup', userData)
        setHeaderToken(data.token) 
        return data

    } catch (error) {
        return rejectWithValue(error.message)
        
    }
}
)


export const loginOperation = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('users/login', userData)
        setHeaderToken(data.token) 
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)

export const loggOutOperation = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        await axios.post('users/logout') 
        clearHeaderToken()
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)

export const currentOperation = createAsyncThunk('auth/current', async (_, { rejectWithValue, getState }) => {
    try {
        const { auth } = getState()
        setHeaderToken(auth.token) 
        const { data } = await axios.get('users/current')
        
        return data
        
    } catch (error) {
        clearHeaderToken()
        return rejectWithValue(error.message)
    }
},
    {
        condition: (_, { getState }) => {
            const { auth } = getState()
            if (!auth.token) {
                return false;
            }
        
    }}
)

