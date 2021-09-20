import React from "react";
import UserCard from "./components/UserCard/UserCard";
import data from "./data"

function App() {
  return (
    <li className="cardWrapper">
      <UserCard user={data[7]}/>
    </li>
  )
}

export default App;
