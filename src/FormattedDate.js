import React, { useState, useEffect } from "react";

export default function FormattedDate({ date }) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [currentTime, setCurrentTime]= useState(new Date())


  useEffect(() => {
    const timerID = setInterval(() => {
        setCurrentTime(new Date());
    }, 600);

    return () => {
        clearInterval(timerID);
    }
  },[])

  useEffect (() => {
    setCurrentTime(new Date())
  }, [date]);




  let day = days[date.getDay()];
  let hour = currentTime.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day}, {hour}:{minutes}
    </div>
  );
}


