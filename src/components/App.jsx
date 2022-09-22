import React,{useEffect} from "react";
import { currentUser } from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";


import { StyledApp } from "./Container/Container.styled";
import NavBar from "./NavbarMenu/NavbarMenu";
import ContactsRoutes from "./ContactsRoutes/ContactsRoutes";

export function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
     dispatch(currentUser())
  } , [dispatch])
  
  return (
    <>
        <StyledApp>
         < NavBar />
         <ContactsRoutes/>
   
     </StyledApp>
    </>
  )
}



