import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";


export default function Forecast(props) {
let [loaded, setLoaded] = useState(false)
let [forecast, setForecast] = useState(false)

  function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }


  if (loaded) { 
   
    return (
    <div className="row"> 
    <div className="col forcastSeperator">
         < WeatherForecastDay data={forecast[0]} />
</div>
<div className="col forcastSeperator" >
      < WeatherForecastDay data={forecast[1]} />
      </div>
<div className="col forcastSeperator" >
      < WeatherForecastDay data={forecast[2]} />
      </div>
<div className="col forcastSeperator" >
      < WeatherForecastDay data={forecast[3]} />
      </div>
<div className="col " >
      < WeatherForecastDay data={forecast[4]} />
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
