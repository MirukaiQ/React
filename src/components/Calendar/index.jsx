import React, { useState } from "react";
import { addDays, format } from "date-fns";
import classNames from "classnames";
import Days from "./Days";
import Mounth from "./Mounth";
import "./style.scss"

const Calendar = () => {
  const [count, setCount] = useState(0);
  const date = new Date("December 1, 2020 03:24:00");
  const [myDate, setMyDate] = useState(date);
  const [mounthValue, setMounthValue] = useState(1)

  const timeValue = count;
  const newDay = addDays(myDate, timeValue);
  const days = format(newDay, "dd");
  const mounth = format(newDay, "EEEE");

  const dateHandler = (e) => {
    let content = e.target.textContent;
    let daysNumb = Number(days);
    if (daysNumb > content) {
      let j = daysNumb - content;
      setCount(-j);
      setMyDate(new Date(newDay));
    }
    if (daysNumb < content) {
      let j = content - daysNumb;
      setCount(j);
      setMyDate(new Date(newDay));
    }
  };
  console.log()
  return (
    <>
      <div className="calendar">
        <div className="calendarLeftSide">
          <p className="calendarDay">{mounth}</p>
          <p className="calendarNumber">{days}</p>
        </div>
        <div className="calendarRightSide">
          <Mounth className="mounthYear"myDate={myDate} mounthValue={mounthValue} 
          setMounthValue={setMounthValue}/>
          <div className="calendarMain">
            <div className="calendarMainContent">
              <Days dateHandler={dateHandler} mounthValue={mounthValue} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
