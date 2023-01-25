import { useFormik } from "formik";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationContext from "../AuthenticationContext";
import "./signupForm.css";

const initialValues = {
  username: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
  ) {
    errors.username = "Invalid username address";
  }
  return errors;
};

const SignIn = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const authContext = useContext(AuthenticationContext);
  const [signError, setSignError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const isLoggedIn = await authContext.logIn(values);
    console.log("this is the signin page", isLoggedIn);
    if (isLoggedIn) {
      navigate("/");
    } else {
      setSignError("Invalid username or password");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

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
            {formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
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
          {signError}
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
