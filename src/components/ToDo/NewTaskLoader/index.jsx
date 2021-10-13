import React, { useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { toDoList } from "../ListLoader/list";
import { TASK_VALIDATE } from "./validator";

export default function NewTaskDoader(props) {
    const {list, setList} = props;
  const initialState = {
    NewTaskText: "",
  };
 
  const SubmitForm = (values, formikBag) => {
    console.log(list);
    formikBag.resetForm();
    const newTask = {
        id: toDoList.length,
        task: values.NewTaskText,
        status: false,
      };
      const newList = [...list, newTask]
      toDoList.push(newTask)
      setList(newList)
  };
  return (
    <Formik initialValues={initialState} onSubmit={SubmitForm}
     validationSchema={TASK_VALIDATE}>
      <Form>
        <Field type="text" name="NewTaskText"></Field>
        <ErrorMessage name="NewTaskText">
            {(message) => <div className="errorMessage">{message}</div>}
        </ErrorMessage>
        <button>add task</button>
      </Form>
    </Formik>
  );
}
