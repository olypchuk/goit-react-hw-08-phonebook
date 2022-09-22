import { Suspense } from "react"
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const SharedLayout = () => {
    return (<>
        <NavLink to='/'>Phonebook</NavLink>
        <NavLink to='login'>login</NavLink>
        <NavLink to='register'>register</NavLink>
         <Suspense fallback={<p>loading.....</p>}>
      <Outlet />
        </Suspense>
    </> 
    );
}

export default SharedLayout;