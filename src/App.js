import React from "react";

import "./App.css";

import Room from "./Room.js";

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Room/>
      </div>
    );
  }
}

export default App;