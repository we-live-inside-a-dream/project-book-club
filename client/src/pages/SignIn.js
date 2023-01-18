import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./signupForm.css";


const initialValues = {
  username: "",
  password: "",
};

export const baseUrl = "http://localhost:5001";
const onSubmit = async (values) => {
  await fetch(`${baseUrl}/api/member/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: baseUrl,
    },
    body: JSON.stringify(values),
  });
};

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)) {
    errors.username = "Invalid username address";
  }
  return errors;
};

const SignIn = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("form errors", formik.errors);
  return (
    <div class="background">
      <div class="secondBackground">
        <form class="form" onSubmit={formik.handleSubmit}>
          <div class="container">
            <label class="label" htmlFor="username">
              username Address
            </label>
            <input
              class="input"
              id="username"
              name="username"
              type="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? <div>{formik.errors.username}</div> : null}
          </div>

          <div class="container">
            <label class="label" htmlFor="username">
              Password
            </label>
            <input
              class="input"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account yet?
          <br />
          <a href="/signupForm"> Register </a> here!
        </p>
      </div>
    </div>
  );
};

export default SignIn;
