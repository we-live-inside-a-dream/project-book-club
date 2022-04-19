import React from "react";
import { useFormik } from "formik";
import './signupForm.css'

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const baseUrl = "http://localhost:5001"
const onSubmit = async (values) => {
  await fetch(`${baseUrl}/api/members/create`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': baseUrl
    },
    body: JSON.stringify(values)
  });
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
    errors.password =
      "Password must be at least 8 characters and contain at least one number and one letter";
  }
  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log('form errors', formik.errors)
  return (
    <div class='background'>
      <div class='secondBackground'>
        <form class='form' onSubmit={formik.handleSubmit}>
          <div class='container'>
            <label class='label' htmlFor="firstName">First Name</label>
            <input class='input'
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            /></div>
          {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
          <div class='container'>
            <label class='label' htmlFor="firstName">Last Name</label>
            <input class='input'
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          </div>

          <div class='container'>
            <label class='label' htmlFor="email">Email Address</label>
            <input class='input'
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>

          <div class='container'>
            <label class='label' htmlFor="email">Password</label>
            <input class='input'
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
