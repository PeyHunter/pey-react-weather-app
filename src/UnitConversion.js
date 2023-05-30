import React from "react";
import "./styles.css"

export default function UnitConversion(props) {
const unit = "celsius";


if (unit === `celsius`) {
  return (
    <div className="WeatherTemperature">
      <span id="cityTemp">{Math.round(props.celsius)}</span>°  
       <span className="unit" > 
        {" "} C 
       </span>
    </div>
  );
} else {

   return }
  
}


