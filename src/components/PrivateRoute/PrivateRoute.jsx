import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";
import { isLoggedIn } from "redux/auth/authSelectors";
const PrivateRoute = () => {
    const isSuccess = useSelector(isLoggedIn)

    if (!isSuccess) {
     return <Navigate to="/login" />    
    }
    return <Outlet/>
}

export default PrivateRoute;