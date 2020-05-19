import React from "react";

import "./App.css";

import Table from "./Table.js";

class App extends React.Component {
  render(){
    // get info for table, ie ID, name, seats, blinds,
    // default timer, timebank, etc., then pass
    // as props here TODO
    return(
      <div className="App">
        <Table/>
      </div>
    );
  }
}

export default App;