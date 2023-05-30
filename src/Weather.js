import axios from "axios";
import React, { useState, useEffect } from "react";
import "./styles.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast.js";
import ContentLoader from "react-content-loader";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity)



  function handleResponse(response) {
 
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      coordinates: response.data.coordinates,
      coordinates: response.data.coordinates,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      city: response.data.city,
      date: new Date (response.data.time * 1000)
    });
}

 

 function handleSubmit(event) {
  event.preventDefault();
  search(city);
}

  function handleCityChange(event) {
    setCity(event.target.value)
  }
  
   function search(){
       let apiKey = "f9do3fd4558cd9a56ebf7d2bbtab042b";
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&${units}`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Search" >
          <form className="row g-2" id="search-form" onSubmit={handleSubmit}>
            <div className="col-sm-10">
              <input
                placeholder="Search for your city..."
                type="text"
                className="form-control"
                id="city-input" onChange={handleCityChange}
              />
            </div>
            <div className="col-sm-2  text-sm-start">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <ContentLoader viewBox="0 0 380 70" backgroundColor="#f3f3f3">
          <rect x="0" y="0" rx="0" ry="0" width="800" height="20" />
        </ContentLoader>
        <ContentLoader viewBox="0 0 380 70" backgroundColor="#f3f3f3">
          <rect x="0" y="0" rx="0" ry="0" width="80" height="60" />
        </ContentLoader>
        <div>
        <ContentLoader viewBox="0 0 380 70" backgroundColor="#f3f3f3">
          <rect x="0" y="0" rx="0" ry="0" width="400" height="100" />
        </ContentLoader>
    
      </div>
       
      </div>
    );
  }
}
