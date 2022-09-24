import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signUp, logOut, current } from "components/services/userApi";

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async (store,thunkAPI) => {
        try {
            const res = await login(store)
            return res
        } catch (error) {
            console.log('error :>> ', error);
            return thunkAPI.rejectWithValue(error)
        }
    },
    {
        condition: (store, { getState }) => {
            
        }
    }
)
export const signUpUser = createAsyncThunk(
    'users/signUpUser',
    async (store,thunkAPI) => {
        try {
            const res = await signUp(store)
            return res
        } catch (error) {
            console.log('error :>> ', error);
           return thunkAPI.rejectWithValue(error)
        }
    }
)
export const logoutUser = createAsyncThunk(
    'users/logoutUser',
    async (_, thunkAPI) => {
        try {
            const res = await logOut()
            return res
        } catch (error) {
            console.log('error :>> ', error);
             return thunkAPI.rejectWithValue(error)
        }
    }
)
export const currentUser = createAsyncThunk(
    'users/currentUser',
    async (_, {rejectWithValue,getState}) => {
        try {
            const { auth } = getState()
  if(!auth.token)return rejectWithValue()
             const res = await current(auth.token)
          
            return res
        } catch (error) {
            console.log('error :>> ', error);
           return rejectWithValue(error)
        }
    }
)