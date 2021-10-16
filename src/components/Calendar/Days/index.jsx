import classNames from "classnames";
import React from "react";

const Days = (props) => {
  const { mounthValue, dateHandler} = props;
  const days = new Array(32).fill(null);
  if (mounthValue % 2 === 0) {
    days.pop(2);
  }
  if (mounthValue % 2 === 0 && mounthValue === 2) {
    days.pop(2);
    days.pop(1);
  }
  return (
    <div>
      {days.map((_, index) => (
        <button className="day" onClick={dateHandler}>
          {index}
        </button>
      ))}
    </div>
  );
};

export default Days;
