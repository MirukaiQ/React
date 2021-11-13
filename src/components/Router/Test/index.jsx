import { Field, Formik, Form } from "formik";
import React from "react";
import * as yup from "yup";

const TestSchema = yup.object().shape({
  firstForm: yup
    .string()
    .min(3, "Too short")
    .max(10, "Too long")
    .required("Field required"),
  secondForm: yup.string().email("Invalid email").required("Fiedl required"),
  thirdForm: yup.number().required("Field required"),
});

const Test = () => {
  return (
    <div className="testFields">
      <h1>Test validation form</h1>
      <Formik
        initialValues={{
          firstForm: "",
          secondForm: "",
          thirdForm: "",
        }}
        validationSchema={TestSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstForm" placeholder="name" />
            {errors.firstForm && touched.firstForm ? (
              <div>{errors.firstForm}</div>
            ) : null}
            <p>
              <Field name="secondForm" />
              {errors.secondForm && touched.secondForm ? (
                <div>{errors.secondForm}</div>
              ) : null}
            </p>
            <p>
              <Field name="thirdForm" />
              {errors.thirdForm && touched.thirdForm ? (
                <div>{errors.thirdForm}</div>
              ) : null}
            </p>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Test;
