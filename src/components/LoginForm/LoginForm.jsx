import { ErrorMessage, Field, Form, Formik } from "formik"
import { useId } from "react";
import * as Yup from 'yup';

   const contactSchema = Yup.object().shape({
        email: Yup.string().min(5, "Too short").max(50, "Too long").required('required'),
        password: Yup.string().min(7, "Too short").required('required'),
 
})

export const LoginForm = ({ submit }) => {
    const emailId = useId();
    const passwordId = useId();
   

    const handleSubmit = (values, action) => {
        submit(values)
        action.resetForm()
       
    } 
  return (
    <Formik initialValues={{ email:"", password:""}} onSubmit={handleSubmit}  validationSchema={contactSchema}> 
          <Form>
               <label htmlFor={emailId}>Email:</label>
              <Field name="email" id={emailId} />
              <ErrorMessage  name="email" component='span'/>
               <label htmlFor={passwordId}>Password:</label>
              <Field name="password" type="password" id={passwordId} />
              <ErrorMessage  name="password" component='span'/>
              <button type="submit">Login</button>
          </Form>
      </Formik> 
  )
}
