import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Room from "./Room.js";

class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <div className="App">
                    <Room />
                </div>
            </React.StrictMode>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));