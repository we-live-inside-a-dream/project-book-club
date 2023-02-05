import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogIn } from "../hooks/useLogIn";
import "./signupForm.css";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/slice/userSlice";

const initialValues = {
  userName: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userName)
  ) {
    errors.userName = "Invalid userName address";
  }
  return errors;
};

const SignIn = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setCredentials, isLoading, userData, error } = useLogIn();

  const onSubmit = async (values) => {
    setCredentials({ user: values.userName, pass: values.password });
  };

  useEffect(() => {
    if (userData) {
      dispatch(SET_USER(userData));
      navigate("/home");
    }
  }, [userData]);

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
            <label class="label" htmlFor="userName">
              userName Address
            </label>
            <input
              class="input"
              id="userName"
              name="userName"
              type="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            {formik.errors.userName ? (
              <div>{formik.errors.userName}</div>
            ) : null}
          </div>

          <div class="container">
            <label class="label" htmlFor="userName">
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
          {error}
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
