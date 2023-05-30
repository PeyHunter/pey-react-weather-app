import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";


export default function Forecast(props) {
let [loaded, setLoaded] = useState(false)
let [forecast, setForecast] = useState(false)



useEffect (() =>{
  setLoaded(false)
}, [props.coordinates])

  function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }


  if (loaded) { 
   
    return (
    <div className="row"> 
  
      {forecast.map(function(dailyForecast, index){
          if (index < 5) {
        return ( 
        <div className="col" key={index}>
         < WeatherForecastDay data={dailyForecast} />
         </div>
         )
          } else {
            return null;
          }

      })}
       
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
