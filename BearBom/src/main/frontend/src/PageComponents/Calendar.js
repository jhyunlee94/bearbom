import React, { useState } from "react";
import Calendar from "react-calendar";
import "../css/calendar.css";
import moment from "moment";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar onChange={onChange} value={value} />
      <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div>
    </>
  );
}

export default Calendar;
