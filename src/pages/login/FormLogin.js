import React from "react"
import shortid from "shortid"
import { FormStyled ,FormButton} from "../../components/Form/Form.styled"
import { PropTypes } from "prop-types"
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { loginUser } from "redux/auth/auth-operations";
import { Notify } from "notiflix";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

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

  const dispatch = useDispatch()
  
  const onLogin = async(payload, { resetForm }) => {
  
    try {
dispatch(loginUser(payload))
 Notify.success("You are logged in!")
    } catch (error) {
      Notify.error('cannot login')
    }
resetForm()
      
  }
  return (<Formik
    initialValues={INITIAL_STATE}
    onSubmit={onLogin}
    validationSchema={schema}>
    <FormStyled autoComplete="off">
        
         <label htmlFor="email">Email</label>
        <Field 
        id={shortid.generate()  }
        type="text"
        name="email"
        placeholder="enter email"
        />
      <ErrorMessage name="email"/>
     <label htmlFor="phone">Password</label> 
          <Field
        id={shortid.generate()  }
        type="password"
        name="password"
        placeholder="enter password"
        />
      <ErrorMessage name="password"/>
      <FormButton type="submit">Log in</FormButton>
      
      <p> Don’t have an account yet? <NavLink to='/register'>Sign up</NavLink></p>
  </FormStyled>
</Formik>)


}

FormLogin.propTypes = {
  initialValues: PropTypes.object,
  onSubmit:PropTypes.func,
  validationSchema:PropTypes.object

}
