import React, {useState} from "react";
import "./styles.css"

export default function UnitConversion(props) {
const [unit, setUnit] = useState ("celsius")
if (unit === `celsius`) {


  return (
    <div>
      <span id="cityTemp">{Math.round(props.celsius)}</span>° <span className="unit" >C</span>
    </div>
  );
} else {
    return "F"
}
}