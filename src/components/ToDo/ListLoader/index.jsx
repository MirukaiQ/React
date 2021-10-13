import classNames from "classnames";
import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { toDoList } from "./list";

export default function ListLoader({list}) {
    const [isChecked, setIsChecked] = useState(false) 
    const classnames = classNames({'check': isChecked})
    const checkHandler = () => {
        isChecked === false ? setIsChecked(true) : setIsChecked(false)
    }
  return (
    <>
      <ul>
        {toDoList.map((list) => {
         return <li>
            <input type="checkbox" name="task" className="checkBox" className={classnames} onClick={checkHandler}/>
            <label htmlFor="task">{list.task}</label>
          </li>;
        })}
      </ul>
    </>
  );
}
