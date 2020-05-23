import React from "react";

import "./App.css";

import Room from "./Room.js";

function getRoomInfo() {
    return {
        name: "testRoom",
        seats: 6,
        timeBank: 30,
        blinds: 50,
        players: [
            {
                id: "felix",
                stack: 1000
            },
            {},
            {
                id: "joe",
                stack: 200
            },
            {
                id: "ben",
                stack: 20
            },
            {},
            {
                id: "subi",
                stack: 423
            }
        ]
    };
}

class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <div className="App">
                    <Room loggedIn={false} tableInfo={getRoomInfo()} />
                </div>
            </React.StrictMode>
        );
    }
}

export default App;