import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import "./style.scss";
import { loginValidator } from "./loginValidation";
const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    isChecked === false ? setIsChecked(true) : setIsChecked(false);
  };
  return (
    <>
      <div className="login-main">
        <header className="login-main-header">
          <h1>LOGIN TO YOUR ACCOUNT</h1>
        </header>
        <Formik
          initialValues={{
            email: "",
            password: "",
            checkbox: false,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={loginValidator}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="validationFields">
                <p>
                  <Field
                    className="field login-field"
                    name="email"
                    placeholder="Email address"
                  />
                  {errors.email && touched.email ? (
                    <div className="email-error">{errors.email}</div>
                  ) : null}
                </p>
                <p>
                  <Field
                    className="field login-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div className="password-error">{errors.password}</div>
                  ) : null}
                </p>
              </div>
              <div className="checkbox">
                <p>
                  <Field
                    type="checkbox"
                    name="checkbox"
                    onClick={checkHandler}
                    className="login-checkbox"
                  />
                  <label htmlFor="checkbox" className="singup-checkbox-text">
                    Remember Me
                  </label>
                  <a className="login-link" href="https://www.squadhelp.com/forgot_password.php">
                    Forgot Password
                  </a>
                </p>
              </div>
              <div className="submit">
                <button type="submit" className="login-submit">
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
