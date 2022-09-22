import { useDispatch,useSelector } from "react-redux";
import { logoutUser } from "redux/auth/auth-operations";
import { getUser, isLoggedIn } from "redux/auth/authSelectors";
import { Notify } from "notiflix";
const UserMenu = () => {
    const user = useSelector(getUser)
    console.log('user', user)
    const isSuccess = useSelector(isLoggedIn)
    const dispatch=useDispatch()
    const onLogout = () => {
    dispatch(logoutUser())
    Notify.success("You are lougout")
}
    return (<>
        {isSuccess &&
            <div><div>{user.email}</div>
                <button type="button" onClick={onLogout}>logout</button>
       
            </div>}
   
  </>
      
    );
}

export default UserMenu;