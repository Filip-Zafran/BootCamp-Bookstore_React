import React from "react";
import "./App.css";
import AllBooks from "./components/Allbooks";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="flexElements">
          <img
            className="logo"
            src="./PIXS/logo.png"
            alt="Ubiqum bookstore logo"
            width="150"
          />
        </div>

        <div className="flexElements">
          <input
            className="form-control"
            id="searchBar"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      <hr />
      <br />
      <AllBooks />
      <div id="showPictureID"></div>
    </div>
  );
}

export default App;
