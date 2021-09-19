import React from "react";
import UserCard from "./components/UserCard/UserCard";
import data from "./data"

function App() {
  return (
    <li className="cardWrapper">
      <UserCard
        userName="Yevgeny"
        userPicture='https://www.factroom.ru/wp-content/uploads/2019/06/10-faktov-o-evgenii-ponasenkove-kotoryj-svodit-vsekh-s-uma-1250x883.jpg'
      />
      <UserCard
        userName="Daniel"
        userPicture='https://i2.wp.com/comicbookdebate.com/wp-content/uploads/2019/07/There20will20be20blood202-750x460.jpg?resize=750%2C460&ssl=1'
      />
    </li>
  )
}

export default App;
