import React from "react";

export default function WeatherForecastDay(props) {
    return (
        
        <div className="col daysInWeek forcastSeperator">
        <p className="weekdays">{props.data.time}</p>
        <div className="col-sm-1 currentWeather emoji-container">
            <img src={props.data.condition.icon_url} alt={props.data.condition.description} />
          </div>
        <p className="temp">
          {Math.round(props.data.temperature.maximum)}° | <span className="nighttime "> {Math.round(props.data.temperature.minimum)}°</span>
        </p>
        <p className="note">{props.data.condition.description}</p>
      </div>
    )
}