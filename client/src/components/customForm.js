import React from "react";
import { Form, Field, ErrorMessage } from "formik";

const CustomForm = ({ formikProps }) => {
  return (
    <Form>
      <div>
        <label htmlFor="email">Email</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email" component="div" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" />
      </div>

      <button type="submit" disabled={formikProps.isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

export default CustomForm;
