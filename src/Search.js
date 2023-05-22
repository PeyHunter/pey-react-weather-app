import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="row g-2" id="search-form">
        <div className="col-sm-10">
          <input
            placeholder="Search for your city..."
            type="text"
            className="form-control"
            id="city-input"
          />
        </div>
        <div className="col-sm-2  text-sm-start">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
