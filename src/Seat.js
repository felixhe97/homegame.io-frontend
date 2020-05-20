import React from "react";
import Player from "./Player.js";

import PokerClientSocket from './pokerClientSocket.js';
const ws = new PokerClientSocket('TODO');

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
            ws.sit('x', 4).then((payload) => {
                this.setState((state) => ({available : false}));
            }).catch(err => {
                console.error(err);
            });
        }
    }


    render() {
        let seatButton;
        if (this.state.available) {
            seatButton = <button className="Seat" onClick={this.handleClick}>Click to sit down.</button>;
        } else {
            seatButton = <Player/>;
        }
        return (
            <React.Fragment>
                {seatButton}
            </React.Fragment>
        );
    }
}

export default Seat;