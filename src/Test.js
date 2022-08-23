import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
     password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const ValidationSchemaExample = () => (
  <div className='d-flex flex-column'>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values // Api calls
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" />
          {errors.email && touched.email ? (
            <div>{errors.email}</div>
          ) : null}
          <Field name="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);