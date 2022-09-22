import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchContacts, fetchContactsAdd, fetchContactsDelete } from "components/services/apiservice"
import {Notify} from "notiflix"

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
    async (_,thunkAPI) => {
      try {
            const response = await fetchContacts()
            return response
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
   
  }
)
export const fetchAddContacts = createAsyncThunk(
  'contacts/fetchAddContacts',
  async (store, thunkAPI) => {
    try {    
      const response = await fetchContactsAdd(store)
      console.log('response', response)
      return response
    } catch (error) {
       return thunkAPI.rejectWithValue(error)
    }   
  },
  {
    condition: (store, { getState }) => {
    
      const { contacts }= getState()
     
      const arrOfContacts = contacts.contacts
      const findSameNumber=arrOfContacts?.find(contact=>contact.name.toLowerCase()===store.name.toLowerCase())
          if (findSameNumber) {
            Notify.failure("this name already in list")
            return false
      } 
        Notify.success('you added contact')
    }
  }
)
export const fetchDeleteContacts = createAsyncThunk(
  'contacts/fetchDeleteContacts',
  async (id, thunkAPI) => {
    try {
      await fetchContactsDelete(id)
      return id
    } catch (error) {
    return thunkAPI.rejectWithValue(error)
    }
  }
)
