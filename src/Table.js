import React from "react";

import Player from './Player.js';

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            available: props.available,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        if (this.state.available) { // fire off authentication that we sat down TODO
            this.setState(state => ({
                available: !state.available
            }));
        }
    }

    render() {
        let seatButton;
        if (this.state.available) {
            seatButton = <button className="Seat" onClick={this.handleClick}>Click to sit down.</button>;
        } else {
            seatButton = <Player timeBank={this.props.player.timeBank} stack={this.props.player.stack} id={this.props.player.id}/>;
        }
        return (
            <React.Fragment>
                {seatButton}
            </React.Fragment>
        );
    }
}

// table has a middle thing for pot, seats circling, rotating button

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(event) {
        // TODO how to check if available seat
    }

    render() {
        let i = 0;
        let seats = this.props.players.map((player) => {
            if (Object.keys(player).length === 0) {
                return <Seat key={i++} available={true}/>;
            } else {
                return <Seat key={player.id} available={false} player={player}/>;
            }
        });
        return (
            <React.Fragment>
                {seats}
            </React.Fragment>
        );
    }
}

export default Table;