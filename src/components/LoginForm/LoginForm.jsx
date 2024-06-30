import { ErrorMessage, Field, Form, Formik } from "formik"
import { useId } from "react";
import * as Yup from 'yup';
import css from "./LoginForm.module.css"

   const contactSchema = Yup.object().shape({
        email: Yup.string().min(5, "Too short").max(50, "Too long").required('required').email(),
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
          <Form className={css.container}>
               <label htmlFor={emailId} className={css.label}>Email:</label>
              <Field name="email" id={emailId} className={css.input}/>
              <ErrorMessage  name="email" component='span' className={css.span}/>
               <label htmlFor={passwordId} className={css.label}>Password:</label>
              <Field name="password" type="password" id={passwordId} className={css.input}/>
              <ErrorMessage  name="password" component='span' className={css.span}/>
              <button type="submit" className={css.btn}>Login</button>
          </Form>
      </Formik> 
  )
}
