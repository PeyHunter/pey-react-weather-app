import React from "react";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let maxTemp = Math.round(props.data.temperature.maximum)
        return `${maxTemp}`
    }
    function minTemperature() {
        let minTemp = Math.round(props.data.temperature.minimum)
        return `${minTemp}`
    }

    function day(){
        let date = new Date(props.data.time * 1000)
        let day = date.getDay()
        
        let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
        return day[day]
    }

    return (
        
        <div className="col daysInWeek forcastSeperator">
        <p className="weekdays">{day()}</p>
        <div className="col-sm-1 currentWeather emoji-container">
            <img src={props.data.condition.icon_url} alt={props.data.condition.description} />
          </div>
        <p className="temp">
          {maxTemperature()}° | <span className="nighttime "> {minTemperature()}°</span>
        </p>
        <p className="note">{props.data.condition.description}</p>
      </div>
    )
}