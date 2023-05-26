
import './App.css';
import "./styles.css"
import Weather from "./Weather";

import Footer from "./Footer.js";

export default function App() {
  return <div>
<br/><br/><br/>
      <div className="container">
      <div className="background">
        <br/>
        <Weather defaultCity="London" />
        <br />
        
        <br />
        <br />
        <Footer />
      </div>
    </div>
    </div>
  
}


