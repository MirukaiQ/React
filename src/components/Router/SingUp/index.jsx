import { ErrorMessage, Field, Formik, Form } from "formik";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { singupValidator } from "./singupValidation";
import "./../errors.scss"
import classNames from "classnames";

const SingUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    isChecked === false ? setIsChecked(true) : setIsChecked(false);
  };
  const fieldWrapper = classNames("field")
  return (
    <>
      <div className="singup-main">
        <header className="singup-main-header">
          <h1 className="header-name">CREATE AN ACCOUNT</h1>
          <p className="header-text">
            We always keep your name and email address private.
          </p>
        </header>
        <div className="singup-fields">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              displayName: "",
              email: "",
              password: "",
              passwordConf: "",
              radio: "",
              checkbox: false,
            }}
            validationSchema={singupValidator}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="validationFields">
                  <p>
                    <Field
                      className={fieldWrapper}
                      name="firstName"
                      placeholder="Firs name"
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="first-error">{errors.firstName}</div>
                    ) : null}
                    <Field
                      className={fieldWrapper}
                      name="lastName"
                      placeholder="Last name"
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="second-error">{errors.lastName}</div>
                    ) : null}
                  </p>
                  <p>
                    <Field
                      className={fieldWrapper}
                      name="displayName"
                      placeholder="Display name"
                    />
                    {errors.displayName && touched.displayName ? (
                      <div className="third-error">{errors.displayName}</div>
                    ) : null}
                    <Field
                      className={fieldWrapper}
                      name="email"
                      placeholder="Email adress"
                    />
                    {errors.email && touched.email ? (
                      <div className="fourth-error">{errors.email}</div>
                    ) : null}
                  </p>
                  <p>
                    <Field
                      className={fieldWrapper}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="fifth-error">{errors.password}</div>
                    ) : null}
                    <Field
                      className={fieldWrapper}
                      type="password"
                      name="passwordConf"
                      placeholder="Confirm password"
                    />
                    {errors.passwordConf && touched.passwordConf ? (
                      <div className="sixth-error">{errors.passwordConf}</div>
                    ) : null}
                  </p>
                </div>
                <div className="radio">
                  <div className="radio-field">
                    <Field
                      type="radio"
                      name="radio"
                      value="One"
                      className="field"
                    />
                    <label htmlFor="radio" className="radio-field-heading">
                      Join As a Buyer
                    </label>
                    <p className="radio-field-text">
                      I am looking for a Name, Logo or Tagline for my business,
                      brand or product.
                    </p>
                  </div>
                  <div className="radio-field">
                    <Field
                      type="radio"
                      name="radio"
                      value="Two"
                      className="field"
                    />
                    <label htmlFor="radio" className="radio-field-heading">
                      Join As a Creative or Marketplace Seller
                    </label>
                    <p className="radio-field-text">
                      I plan to submit name ideas, Logo designs or sell names in
                      Domain Marketplace.
                    </p>
                  </div>
                </div>
                <div className="check">
                  <p>
                    <Field
                      type="checkbox"
                      name="checkbox"
                      onClick={checkHandler}
                      className="singup-checkbox"
                    />
                    <label htmlFor="checkbox" className="singup-checkbox-text">
                      Allow Squadhelp to send marketing/promotional offers from
                      time to time
                    </label>
                  </p>
                </div>
                <div className="singup-footer">
                  <button type="submit" className="singup-submit"> Create account</button>
                  <p className="singup-footer-text">
                    By clicking this button, you agree to our
                    <a
                      href="https://www.squadhelp.com/Terms&Conditions"
                      className="singup-footer-link"
                    >
                      Terms of Service.
                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SingUp;
