import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./FormikForm.css";


const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


const SingupForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', keepSigned: false }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values }) => (
        <Form className="loginForm">
          <h3> SIGN IN TO YOUR ACCOUNT</h3>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Field type="checkbox" name="keepSigned" />  
          <label htmlFor="keepSigned">Keep me signed in</label>
          <button className="submitBtn" type="submit">
            SIGN IN
      </button>
        </Form>
      )}

    </Formik>
  );
};

export default SingupForm;