import styled from "styled-components";
import { PropTypes } from "prop-types";
import { Contact } from "components/Contact/Contact";

export const ContactsList = ({ data}) => {
  return <StyledUl>
    {data.map(item => (<Contact key={item.id} {...item} />))}
  </StyledUl>
}



const StyledUl = styled.ul`
display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 0;

`

ContactsList.propTypes = {
  data: PropTypes.array.isRequired,

}
    
// export const ContactsList = ({ data,onClick }) => {
//   const Loading = useSelector(isLoadingContact)

//   return <StyledUl>
//     {data?.map(item => { 
//       const { name, number,id } = item;
//         return <StyledContainer key={id} ><li>{name}<p>{number}</p>
//        </li><Button type="button" onClick={()=>onClick(id)}>{Loading &&
//               <Spinner
//           as="span"
//           animation="grow"
//           size="sm"
//           role="status"
//           aria-hidden="true"
//         />  
//             }delete</Button></StyledContainer>
//     })}
          
//   </StyledUl>
// }
