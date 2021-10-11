import React, { useState } from "react";
import styles from "./../../styles/calendar.module.scss";
import { addDays, format } from "date-fns";
import { addMonths } from "date-fns/esm";

const Calendar = () => {
  const [count, setCount] = useState(0);
  const date = new Date("December 1, 2020 03:24:00");
  const [myDate, setMyDate] = useState(date);
  const [mounthValue, setMounthValue] = useState(1);

  const timeValue = count;
  const newDay = addDays(myDate, timeValue);
  const days = format(newDay, "dd");
  const mounth = format(newDay, "EEEE");

  const newMounth = addMonths(myDate, mounthValue);
  const mounthYears = format(newMounth, "MMMM Y");

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
  const mounthPlus = () => {
    if (mounthValue < 12) {
      setMounthValue(mounthValue + 1);
    }
    if (mounthValue >= 12) {
      setMounthValue(1);
    }
  };
  const mounthMinus = () => {
    if (mounthValue <= 12 && mounthValue !== 1) {
      setMounthValue(mounthValue - 1);
    }
    if (mounthValue >= 12) {
      setMounthValue(1);
    }
  };
  let lastDays;
  if (mounthValue % 2 !== 0 && mounthValue !== 2) {
    lastDays = (
      <>
        <button onClick={dateHandler}>26</button>
        <button onClick={dateHandler}>27</button>
        <button onClick={dateHandler}>28</button>
        <button onClick={dateHandler}>29</button>
        <button onClick={dateHandler}>30</button>
        <button onClick={dateHandler}>31</button>
      </>
    );
  }
  if (mounthValue === 2) {
    lastDays = (
      <>
        <button onClick={dateHandler}>26</button>
        <button onClick={dateHandler}>27</button>
        <button onClick={dateHandler}>28</button>
      </>
    );
  }
  if (mounthValue % 2 === 0 && mounthValue !== 2) {
    lastDays = (
      <>
        <button onClick={dateHandler}>26</button>
        <button onClick={dateHandler}>27</button>
        <button onClick={dateHandler}>28</button>
        <button onClick={dateHandler}>29</button>
        <button onClick={dateHandler}>30</button>
      </>
    );
  }

  console.log(mounthValue);
  return (
    <>
      <div className="calendar">
        <div className={styles.calendarLeftSide}>
          <p className="calendarDay">{mounth}</p>
          <p className="calendarNumber">{days}</p>
        </div>
        <div className="calendarRightSide">
          <p className="calendarHeader">{mounthYears}</p>
          <button onClick={mounthMinus}>pver</button>
          <button onClick={mounthPlus}>next</button>
          <div className="calendarMain">
            <p className="calendarMainHeader">S M T W T F S</p>
            <div className="calendarMainContent">
              <p>
                <button onClick={dateHandler}>1</button>
                <button onClick={dateHandler}>2</button>
                <button onClick={dateHandler}>3</button>
                <button onClick={dateHandler}>4</button>
              </p>
              <p>
                <button onClick={dateHandler}>5</button>
                <button onClick={dateHandler}>6</button>
                <button onClick={dateHandler}>7</button>
                <button onClick={dateHandler}>8</button>
                <button onClick={dateHandler}>9</button>
                <button onClick={dateHandler}>10</button>
                <button onClick={dateHandler}>11</button>
              </p>
              <p>
                <button onClick={dateHandler}>12</button>
                <button onClick={dateHandler}>13</button>
                <button onClick={dateHandler}>14</button>
                <button onClick={dateHandler}>15</button>
                <button onClick={dateHandler}>16</button>
                <button onClick={dateHandler}>17</button>
                <button onClick={dateHandler}>18</button>
              </p>
              <p>
                <button onClick={dateHandler}>19</button>
                <button onClick={dateHandler}>20</button>
                <button onClick={dateHandler}>21</button>
                <button onClick={dateHandler}>22</button>
                <button onClick={dateHandler}>23</button>
                <button onClick={dateHandler}>24</button>
                <button onClick={dateHandler}>25</button>
              </p>
              <p>{lastDays}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
