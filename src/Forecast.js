import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Forecast.css";


export default function Forecast(props) {
let [loaded, setLoaded] = useState(false)
let [forecast, setForecast] = useState(false)

  function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }


  if (loaded) { 
    console.log(forecast)
    return (
     <div className="row">
      
      <div className="col daysInWeek forcastSeperator">
        <p className="weekdays">{forecast[0].time}</p>
        <div className="col-sm-1 currentWeather emoji-container">
            <img src={forecast[0].condition.icon_url} alt={forecast[0].condition.description} />
          </div>
        <p className="temp">
          {Math.round(forecast[0].temperature.maximum)}° | <span className="nighttime "> {Math.round(forecast[0].temperature.minimum)}°</span>
        </p>
        <p className="note">{forecast[0].condition.description}</p>
      </div>
    </div>
  );

  } else {

      let apiKey ="f9do3fd4558cd9a56ebf7d2bbtab042b"
     let units = "metric";
     let latitude = props.coordinates.latitude
     let longitude = props.coordinates.longitude
     let url = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}3&key=${apiKey}&units=${units}`
      axios.get(url).then(handleResponse); 

} 

}
