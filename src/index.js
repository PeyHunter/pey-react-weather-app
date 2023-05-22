import { StrictMode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import City from "./City";
import Forcast from "./Forecast.js";
import Footer from "./Footer.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <div className="background">
        <br/>
        <Search />
        <City />
        <br />
        <Forcast />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  </StrictMode>
);
