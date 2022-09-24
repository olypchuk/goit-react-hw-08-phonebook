
export const filterHandleChange = (arr, filter) => {
  if (!arr||arr.length===0) return
  if(!filter)return arr
    const filteredArray = arr?.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
      || contact.number.includes(filter.trim()))
  
    return filteredArray
  }
export const getContacts = ({contacts } ) => contacts.contacts
export const isLoadingContact = ({ contacts }) => contacts.loading
export const filterContacts = ({ filter }) => filter

export  const sortedContactsFunction= (contacts) => [...contacts].sort((a, b) => a.name.localeCompare(b.name))