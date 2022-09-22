import { Outlet } from "react-router-dom"
import UserMenu from "components/UserMenu/UserMenu"
const NavBar = () => {
    return (<>
      
        {/* <h1>Phonebook</h1> */}
        <UserMenu/>
      <Outlet/>
    </>
    )
}
export default NavBar