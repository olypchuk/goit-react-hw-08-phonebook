import { useDispatch,useSelector } from "react-redux";
import { logoutUser } from "redux/auth/auth-operations";
import { getUser, isLoggedIn,isLoading } from "redux/auth/authSelectors";
import { Notify } from "notiflix";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const UserContainer=styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

`
const UserMenu = () => {
    const user = useSelector(getUser)
  
    const Loading = useSelector(isLoading)
    const isSuccess = useSelector(isLoggedIn)
    const dispatch=useDispatch()
    const onLogout = () => {
    dispatch(logoutUser())
    Notify.success("You are lougout")
}
    return (<>
        {isSuccess &&user&&
        <UserContainer>{user?.email}

        <Button type="button" onClick={onLogout}>logout{Loading &&
        <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
        />  
        }</Button>

        </UserContainer>}
   
  </>
      
    );
}

export default UserMenu;