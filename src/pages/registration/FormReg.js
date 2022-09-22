import React from "react"
import shortid from "shortid"
import { NavLink } from "react-router-dom"
import { FormStyled ,FormButton} from "../../components/Form/Form.styled"
import { PropTypes } from "prop-types"
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { signUpUser } from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { Notify } from "notiflix";


const schema = yup.object().shape({
  name: yup.string()
   
    .max(15)
    .required("Please enter name")
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),
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
  name: '',
  email: '',
  password:''
}

export const FormReg = () => {

  const dispatch = useDispatch()
  
  const handleSubmit = (payload, { resetForm }) => {

  try {
    dispatch(signUpUser(payload))
    Notify.success("you are signed up!")
  } catch (error) {
    Notify.error('You canot register')
  console.log('error', error)
  }
  resetForm()    
}
  return (<Formik
    initialValues={INITIAL_STATE}
    onSubmit={handleSubmit}
    validationSchema={schema}>
    <FormStyled autoComplete="off">
         <label htmlFor="name">Name</label>
        <Field 
        id={shortid.generate()  }
        type="text"
        name="name"
        placeholder="enter name"
        />
      <ErrorMessage name="name" />
         <label htmlFor="email">Email</label>
        <Field 
        id={shortid.generate()  }
        type="text"
        name="email"
        placeholder="enter email"
        />
      <ErrorMessage name="email"/>
     <label htmlFor="password">Password</label> 
          <Field
        id={shortid.generate()  }
        type="password"
        name="password"
        placeholder="enter password"
        />
      <ErrorMessage name="password"/>
      <FormButton type="submit">Register</FormButton>
      <p>Already have an account? <NavLink to='/login'>Log in</NavLink></p>
  </FormStyled>
</Formik>)


}

FormReg.propTypes = {
  initialValues: PropTypes.object,
  onSubmit:PropTypes.func,
  validationSchema:PropTypes.object

}
