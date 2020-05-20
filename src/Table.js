import React from "react";
import Seat from "./Seat.js";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history : [],
            seats : [],
        };
    }

    render() {
        return (
            <React.Fragment>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
            </React.Fragment>
        );
    }
}

export default Table;