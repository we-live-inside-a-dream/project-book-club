
import { useFormik } from "formik";
import './signupForm.css'

const initialValues = {
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
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const SignIn = () => {
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

          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account yet?
            <br />
        <a href="/signupForm"> Register </a> here!
        </p>


      </div>
    </div>
  );
};

export default SignIn;
