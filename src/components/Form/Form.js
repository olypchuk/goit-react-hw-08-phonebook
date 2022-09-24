import React from "react"
import { PropTypes } from "prop-types"
import { Formik } from 'formik';
import * as yup from 'yup'
import { useDispatch,useSelector } from "react-redux";
import { fetchAddContacts } from "redux/contacts-operations";
import { getContacts } from "redux/selectors";
import { Notify } from "notiflix";
import { isLoadingContact } from "redux/selectors";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const schema = yup.object().shape({
  name: yup.string()
   
    .max(15)
    .required("Please enter name")
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),

  number: yup.string()
    .required('Please enter number')
    .min(6)
    .max(15)
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number is not valid")


})

export const INITIAL_STATE = {
  name: '',
  number: ''
}



export const FormByFormik = () => {
  const Loading = useSelector(isLoadingContact)
   const dispatch = useDispatch()
  const contacts = useSelector(getContacts)

  const handleSubmit = (payload, { resetForm }) => {

  try {
  dispatch(fetchAddContacts(payload))
  resetForm()
 
  } catch (error) {
  Notify.error('You could not added contact' )
  }    
  return contacts

  }
    return (
<>
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

              <Form.Group controlId="name" className="relative">
            <Form.Label>Name :</Form.Label>
            <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={values.name}
                required
                className={touched.name && errors.name ? "error" : null}
              />
                    {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ): null}
          </Form.Group>
                <Form.Group controlId="number"  className="relative">
            <Form.Label >Number :</Form.Label>
            <Form.Control
              type="text"
              name="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
              required
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              className={touched.number && errors.number ? "error" : null}
              />
              {touched.number && errors.number ? (
                <div className="error-message">{errors.number}</div>
              ): null}
          </Form.Group>
         
          <Button variant="primary" type="submit" disabled={Loading}> add contact
           </Button>
        </Form>
      )}

      </Formik> 
      </>
)


}

FormByFormik.propTypes = {
  initialValues: PropTypes.object,
  onSubmit:PropTypes.func,
  validationSchema:PropTypes.object

}


///////
  //  { <Formik 
  //   initialValues={INITIAL_STATE}
  //   onSubmit={handleSubmit}
  //   validationSchema={schema}>
      
  //  <FormStyled autoComplete="off">
  //        <label htmlFor="name">Name</label>
  //       <Field 
  //       id={showId}
  //       type="text"
  //       name="name"
  //       placeholder="enter name"
  //       />
  //     <ErrorMessage name="name"/>
  //    <label htmlFor="number">Number</label> 
  //         <Field
  //       id={showId}
  //       type="tel"
  //       name="number"
  //       placeholder="enter number"
  //       />
  //     <ErrorMessage name="number"/>
  //       <Button type="submit">add contact</Button>
  // </FormStyled>
  //  </Formik > }
  
  
  
  
          //  onSubmit={(e) => {
          //   e.preventDefault()
          //   addContact(values)
        

          // }} className="mx-auto">
