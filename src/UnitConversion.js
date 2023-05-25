import React, {useState} from "react";
import "./styles.css"

export default function UnitConversion(props) {
const [unit, setUnit] = useState ("celsius")

function showFarhenheit(event) {
    event.preventDefault();
    setUnit("farenheit")
}
function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
}

if (unit === `celsius`) {
  return (
    <div className="WeatherTemperature">
      <span id="cityTemp">{Math.round(props.celsius)}</span>°  
       <span className="unit" > 
       C | 
       <a href="/" onClick={showFarhenheit}> F </a> 
       </span>
    </div>
  );
} else {
    let farenheitTemp = (props.celsius * 9/5) + 32;

   return (
    <div className="WeatherTemperature">
      <span id="cityTemp">{Math.round(farenheitTemp)}</span>° 

       <span className="unit" > 
       <a href="/" onClick={showCelsius}>C </a>
    | F
       </span>
    </div>
  );}
  
}


