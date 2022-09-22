import { createSlice } from "@reduxjs/toolkit";
import { signUpUser,loginUser,logoutUser,currentUser } from "./auth-operations";
const initialState = {
    user: {},
    isLogin: false,
    token: '',
    isLoading: false,
    error:null
}
const authSlice = createSlice({
   name: 'auth',
    initialState,
    extraReducers: {
        [signUpUser.pending]:(store)=> {
        store.isLoading = true;
        store.error = null  
        },
        [signUpUser.fulfilled]: (store,{payload}) => {
            store.user = payload.user
            store.isLogin = true
            store.token = payload.token
            store.isLoading = false
        },
        [signUpUser.rejected]: (store, { payload }) => {
            store.isLoading = false
            store.error=payload
        },
         [loginUser.pending]:(store)=> {
        store.isLoading = true;
        store.error = null  
        },
        [loginUser.fulfilled]: (store,{payload}) => {
            store.user = payload.user
            store.isLogin = true
            store.token = payload.token
            store.isLoading = false
        },
        [loginUser.rejected]: (store, { payload }) => {
            store.isLoading = false
            store.error=payload
        },
        [logoutUser.pending]:(store)=> {
        store.isLoading = true;
        store.error = null  
        },
        [logoutUser.fulfilled]: (store,{payload}) => {
            store.user = {}
            store.isLogin = false
            store.token = ''
            store.isLoading = false
         
        
        },
        [logoutUser.rejected]: (store, { payload }) => {
            store.isLoading = false
            store.error=payload
        },
        [currentUser.pending]:(store)=> {
        store.isLoading = true;
        store.error = null  
        },
        [currentUser.fulfilled]: (store, { payload }) => {
            store.isLoading = false
            store.user = payload
            store.isLogin = true
            // store.token = payload.token
            
        },
        [currentUser.rejected]: (store, { payload }) => {
            store.isLoading = false
            store.token=''
            store.error=payload
        },

        
    }
})
export default authSlice.reducer