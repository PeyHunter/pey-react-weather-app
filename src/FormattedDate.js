import React, {useState, useEffect} from "react";

export default function FormattedDate(props){
const days = ["Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday", "Sunday"];
const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 600);

    return () => {
      clearInterval(interval);
    };
  }, []); 





    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
if (hour < 10) {
    hour = `0${hour}`
}

    let minutes = props.date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}` 
    }
    return (<div>{day}, {hour}:{minutes}
    </div>)
}