import React from 'react';

import Player from './Player.js';

import UserContext from '../UserContext.js';

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.onClick(this.props.index, this.context);
        event.preventDefault();
    }

    render() {
        let seat;
        if (!this.props.player) {
            seat = <button className="Seat" onClick={this.handleClick}>Click to sit down.</button>;
        } else if (this.props.player.id == this.context.id) {
            seat = <Player player={this.props.player} onClick={this.handleClick} />
        } else {
            seat = <Player player={this.props.player}/>;
        }
        return (
            <section className="Seat">
                {seat}
            </section>
        );
    }
}

Seat.contextType = UserContext;

export default Seat;