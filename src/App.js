import React from "react";

import "./App.css";

import Room from "./Room.js";

class App extends React.Component {
  render(){
    return(
      <React.StrictMode>
        <div className="App">
          <Room/>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;