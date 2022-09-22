
import React,{useEffect} from "react";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { Filter } from "../../components/Filter/Filter";
import { FormByFormik } from "components/Form/Form";
import { useDispatch ,useSelector} from "react-redux";
import { setFilter } from "redux/filterSlice";
import { filterHandleChange, getContacts, filterContacts, sortedContactsFunction } from "redux/selectors";
import { fetchDeleteContacts,fetchAllContacts } from "redux/contacts-operations";
import { Notify } from "notiflix";
const ContactsPage = () => {
    
  const filter  = useSelector(filterContacts)
  const contacts  = useSelector(getContacts)
  const dispatch = useDispatch()
  
useEffect(() => {
dispatch(fetchAllContacts())
}, [dispatch])

  const sortedContacts = sortedContactsFunction(contacts)
  const filteredArray = filterHandleChange(sortedContacts, filter)


  const setFilterContacts = (e) => dispatch(setFilter(e.target.value))
  const deleteContacts = id => {
    
    dispatch(fetchDeleteContacts(id))
    Notify.success('contact was deleted ')
  }
  return (<>

    <h2>Contacts</h2>
    <FormByFormik />
    <Filter onChange={setFilterContacts} value={filter} />
    
         {contacts.length>0&&<ContactsList data={filteredArray} onClick={deleteContacts} /> }</>)
}
export default ContactsPage