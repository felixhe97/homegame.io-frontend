import React from 'react';

import Player from './Player.js';

import UserContext from '../UserContext.js';

function SeatWrapper(props) {
    return (
        <section className="Seat">
            {props.children}
        </section>
    );
}

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.onClick(this.props.index, this.context);
    }

    render() {
        if (!this.props.player) {
            return (
                <SeatWrapper>
                    <button
                        className="Seat"
                        onClick={this.handleClick}
                    >
                        Click to sit down.
                    </button>
                </SeatWrapper>
            );
        } else if (this.props.player.id == this.context.id) {
            return (
                <Player
                    player={this.props.player}
                    onClick={this.handleClick}
                />
            );
        } else {
            return (
                <SeatWrapper>
                    <Player player={this.props.player} />
                </SeatWrapper>
            )
        }
    }
}

Seat.contextType = UserContext;

export default Seat;