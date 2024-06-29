import {  ErrorMessage, Field, Form, Formik, } from "formik"
import { useId } from "react"
import * as Yup from 'yup';



const RegistrationForm = ({submit}) => {
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const handleSubmit = (values, action) => {
        submit(values)
        action.resetForm()
       
    } 

    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short").max(25, "Too long").required('required'),
        email: Yup.string().min(5, "Too short").max(50, "Too long").required('required'),
        password: Yup.string().min(7, "Too short").required('required'),
 
})


  return (
      <Formik initialValues={{name: "", email:"", password:""}} onSubmit={handleSubmit}  validationSchema={contactSchema}> 
          <Form>
              <label htmlFor={nameId}>Name:</label>
              <Field name="name" id={nameId} />
              <ErrorMessage  name="name" component='span'/>
               <label htmlFor={emailId}>Email:</label>
              <Field name="email" id={emailId} />
              <ErrorMessage  name="email" component='span'/>
               <label htmlFor={passwordId}>Password:</label>
              <Field name="password" type="password" id={passwordId} />
              <ErrorMessage  name="password" component='span'/>
              <button type="submit">Register</button>
          </Form>
      </Formik> 
  )
}

export default RegistrationForm