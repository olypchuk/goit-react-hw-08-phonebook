import styled from "styled-components";
import { PropTypes } from "prop-types";
import { Button } from "react-bootstrap";
import { isLoadingContact } from "redux/selectors";
import { useSelector,useDispatch } from "react-redux";
import { fetchDeleteContacts } from "redux/contacts-operations";
import { Notify } from "notiflix";


export const Contact = ({ name, number, id }) => {
    const Loading=useSelector(isLoadingContact)

  const dispatch = useDispatch()
  
  const deleteContacts = id => {
      
    dispatch(fetchDeleteContacts(id))
    Notify.success('contact was deleted ')
}

        return <StyledContainer><li>{name}<p>{number}</p>
       </li><Button type="button" onClick={()=>deleteContacts(id)} disabled={Loading}>delete</Button></StyledContainer>
   
}
Contact.propTypes = {
  

  id:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number:PropTypes.string.isRequired

}
const StyledContainer=styled.div`
    display:flex;
    align-items: center;
    padding :10px ;
    flex-direction: column;
    text-align: center;
    width: 300px;
    height: 100%;
    margin: 10px;
    border: 20px;
    border-radius: 15px;
    &:hover{
    background-color: rgba(129,52,175,1);
    }
    `