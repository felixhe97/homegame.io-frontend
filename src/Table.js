import React from "react";
import Seat from "./Seat.js";
import PokerClientSocket from "./pokerClientSocket.js";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history : [],
            seats : [],
        };
        this.ws = new PokerClientSocket("TODO");
    }

    joinTable() {

    }

    render() {
        return (
            <Seat/>
            <Seat/>
            <Seat/>
            <Seat/>
            <Seat/>
            <Seat/>
        );
    }
}

export default Table;