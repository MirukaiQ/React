import React, { useState } from "react";
import { format, addMonths } from "date-fns";

const Mounth = (props) => {
  const { myDate, mounthValue, setMounthValue} = props;

  const newMounth = addMonths(myDate, mounthValue);
  const mounthYears = format(newMounth, "MMMM Y");

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
  };
  const arrow1 = `<`
  const arrow2 = `>`
  return (
    <div>
      <p className="calendarHeader">{mounthYears}</p>
      <button className="calendarButton btn1" onClick={mounthMinus}>{arrow1}</button>
      <button className="calendarButton btn2" onClick={mounthPlus}>{arrow2}</button>
    </div>
  );
};

export default Mounth;
