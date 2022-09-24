import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PropTypes } from "prop-types"
import { Formik} from 'formik';
import * as yup from 'yup'
import { loginUser } from "redux/auth/auth-operations";
import { Notify } from "notiflix";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { isLoading } from "redux/auth/authSelectors";
const schema = yup.object().shape({

  email: yup.string()
    .required('Please enter email')
    .min(6)
    .max(20),
  password: yup.string()
    .required('Please enter password')
    .min(6)
    .max(20)
    // .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Must be only digits")


})

export const INITIAL_STATE = {
   email: '',
  password:''
}

export const FormLogin = () => {
const Loading=useSelector(isLoading)
  const dispatch = useDispatch()
  

  const handleSubmit = async(payload, { resetForm }) => {
  
    try {
dispatch(loginUser(payload))
 Notify.success("You are logged in!")
    } catch (error) {
      Notify.error('cannot login')
    }
resetForm()
      
  }
  return (<>
     <Formik 
    initialValues={INITIAL_STATE}
    onSubmit={handleSubmit}
    validationSchema={schema}>
       
 {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
          <Form onSubmit={
            handleSubmit
          } className="mx-auto">

          <Form.Group controlId="email"  className="relative"> 
             <Form.Label>Email :</Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "error" : null}
            />
            {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="password"  className="relative">
            <Form.Label >Password :</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
                value={values.password}
                required
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                
              className={touched.password && errors.password ? "error" : null}
              />
              {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ): null}
          </Form.Group>
         
          <Button variant="primary" type="submit" disabled={isSubmitting}>Login{Loading  &&
              <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />  
            }
        
          </Button>
           <p> Don’t have an account yet? <NavLink to='/register'>Sign up</NavLink></p>
        </Form>
      )}

      </Formik> 
    </>  
  )
}

FormLogin.propTypes = {
  initialValues: PropTypes.object,
  onSubmit:PropTypes.func,
  validationSchema:PropTypes.object

}
  
  
//  <Formik
//     initialValues={INITIAL_STATE}
//     onSubmit={onLogin}
//     validationSchema={schema}>
//     <FormStyled autoComplete="off">
        
//          <label htmlFor="email">Email</label>
//         <Field
//         id={shortid.generate()  }
//         type="text"
//         name="email"
//         placeholder="enter email"
//         />
//       <ErrorMessage name="email"/>
//      <label htmlFor="phone">Password</label>
//           <Field
//         id={shortid.generate()  }
//         type="password"
//         name="password"
//         placeholder="enter password"
//         />
//       <ErrorMessage name="password"/>
//       <FormButton type="submit">Log in</FormButton>
      
//       <p> Don’t have an account yet? <NavLink to='/register'>Sign up</NavLink></p>
//   </FormStyled>
// </Formik>{/*   
        
          //     <Form.Group controlId="name" className="relative">
          //   <Form.Label>Name :</Form.Label>
          //   <Form.Control
          //     type="text"
          //     name="name"
             
          //     onChange={handleChange}
            
          //       onBlur={handleBlur}
          //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //        value={values.name}
          //       required
          //       className={touched.name && errors.name ? "error" : null}
          //     />
          //           {touched.name && errors.name ? (
          //       <div className="error-message">{errors.name}</div>
          //     ): null}
          // </Form.Group> 