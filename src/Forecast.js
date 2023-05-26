import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Forecast.css";
import axios from "axios";
import ContentLoader from "react-content-loader";

export default function Forecast(props) {
  const [ready, setReady]= useState(false);
  const [forecast, setForecast] = useState(null);


 function displayForecast(response) {
  setForecast(response.data)
  console.log(response.data)
  setReady(true)
 } 
 



if (ready)  { return (
    <div className="row">
      <div className="col daysInWeek forcastSeperator">
        <p className="weekdays">mon</p>
        <p className="forecastEmojies">🌧️</p>
        <p className="temp">
          15° | <span className="nighttime "> 12°</span>
        </p>
        <p className="note">Rainy all day</p>
      </div>
      <div className="col daysInWeek forcastSeperator">
        <p className="weekdays">tue</p>
        <p className="forecastEmojies">🌤</p>
        <p className="temp">
          16° | <span className="nighttime"> 13°</span>
        </p>
        <p className="note">Cloudy and a little sun</p>
      </div>
      <div className="col daysInWeek forcastSeperator">
        <p className="weekdays">wen</p>
        <p className="forecastEmojies">🌦</p>
        <p className="temp">
          18° | <span className="nighttime"> 15°</span>
        </p>
        <p className="note">Sun and rain all day</p>
      </div>
      <div className="col daysInWeek">
        <p className="weekdays">thu</p>
        <p className="forecastEmojies">☀</p>
        <p className="temp">
          20° | <span className="nighttime"> 18°</span>
        </p>
        <p className="note">Sunny all day</p>
      </div>
    </div>
  );} else {
    let apiKey ="f9do3fd4558cd9a56ebf7d2bbtab042b"
let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.defaultCity}&key=${apiKey}`
axios.get(url).then(displayForecast);
return (
      <div>
        <ContentLoader viewBox="0 0 380 70" backgroundColor="#f3f3f3">
          <rect x="0" y="0" rx="0" ry="0" width="800" height="20" />
        </ContentLoader>
       
      </div>
    );
  }
}
