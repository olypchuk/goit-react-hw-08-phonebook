import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";
import { isLoggedIn } from "redux/auth/authSelectors";
const PublicRoute = () => {
    const isSuccess = useSelector(isLoggedIn)

    if (isSuccess) {
     return <Navigate to="/contacts" />    
    }
    return <Outlet/>
}

export default PublicRoute;