import { Suspense } from "react"
import { Outlet} from "react-router-dom";
import UserMenu from "components/UserMenu/UserMenu";
import { isLoggedIn } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const SharedLayout = () => {

const isSuccess = useSelector(isLoggedIn)
    return (<>
          <Navbar  bg="light" className="navbar-width " >
          <Container >
          <Nav className="justify-content-end">

          {isSuccess ? < UserMenu /> :<><LinkContainer to="login">
          <Nav.Link href="login">login</Nav.Link>  
          </LinkContainer>
          <LinkContainer to="register">
          <Nav.Link href="register">register</Nav.Link>
          </LinkContainer></> 
          } 

          </Nav>
            </Container>
           
        </Navbar>
   
        <Suspense fallback={<p>loading.....</p>}>
           
          <Outlet />
          </Suspense>
    </> 
    );
}

export default SharedLayout;
export const Home=()=><><h1>Phonebook</h1><h2>Please login or register for use this App</h2></>

// function ColorSchemesExample() {
//     const isSuccess = useSelector(isLoggedIn)
//   return (
//     <>
//     <NavLink to='/'>Phonebook</NavLink>
//        {isSuccess? < UserMenu/>:<><NavLink to='login'>login</NavLink>
//         <NavLink to='register'>register</NavLink></>} 
      
        
//          <Suspense fallback={<p>loading.....</p>}>
//       <Outlet />
//         </Suspense>
      
//     </>
//   );
// }
