import React from "react";
import Player from "./Player.js";

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seatNum: props.seatNum,
            available: props.available
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleSitdownClick() {

    }

    
    handleClick() {
        if (this.state.available) { // fire off authentication that we sat down
            this.setState(state=>({available: false}));
        }
    }


    render() {
        // TODO
        return (
            <div className="Seat" onClick={this.handleClick}>
                Click to sit down.
            </div>
        );
    }
}

export default Seat;