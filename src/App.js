
import './App.css';
import "./styles.css"
import axios from "axios"
import Weather from "./Weather";
import City from "./City";
import Forcast from "./Forecast.js";
import Footer from "./Footer.js";

export default function App() {
  return <div>
<br/><br/><br/>
      <div className="container">
      <div className="background">
        <br/>
        <Weather />
        <City />
        <br />
        <Forcast />
        <br />
        <br />
        <Footer />
      </div>
    </div>
    </div>
  
}


