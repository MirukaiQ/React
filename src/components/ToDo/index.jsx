import React, {useState} from "react";
import ListLoader from "./ListLoader";
import NewTaskDoader from "./NewTaskLoader";
import { toDoList } from "./ListLoader/list";
import "./liststyle.css"

export default function ToDo() {
    const [list, setList] = useState(toDoList)
  return (
    <>
      <div>
        <ListLoader list={list}></ListLoader>
        <NewTaskDoader list={list}setList={setList}></NewTaskDoader>
      </div>
    </>
  );
}
