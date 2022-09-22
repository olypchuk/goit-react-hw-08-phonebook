
import { instance } from './userApi'

export const fetchContacts = async () => {
   try {
     const res = await instance.get('/contacts')
    return res.data
  } catch (error) {
    console.log('error :>> ', error);
  }
}
  
export const fetchContactsAdd = async (data) => {

  const res = await instance.post('/contacts', data)
  return res.data
}
export const fetchContactsDelete = async (id) => {
  const res = await instance.delete(`/contacts/${id}`)
  return res.data  
  
}