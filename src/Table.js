import React from "react";

import Player from './Player.js';

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.onJoinSeat(this.props.index);
        event.preventDefault();
    }

    render() {
        let seatButton;
        if (!this.props.player) {
            seatButton = <button className="Seat" onClick={this.handleClick}>Click to sit down.</button>;
        } else {
            seatButton = <Player timeBank={this.props.player.timeBank} stack={this.props.player.stack} id={this.props.player.id}/>;
        }
        return (
            <section className="Seat">
                {seatButton}
            </section>
        );
    }
}

// table has a middle thing for pot, seats circling, rotating button TODO
// the table has knowledge of each hand
// the room has knowledge of account balance, observers etc
// on each hand room passes table json of whom in each hand, updated stacks

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerJoined: false,
            currDealer: 0,
            pot: 0,
            seating: props.players
        };
        // TODO make it so that leaving or joining whether from user click
        // or stream message makes no difference
        this.handleJoinSeat = this.handleJoinSeat.bind(this);
        this.handleLeaveSeat = this.handleLeaveSeat.bind(this);
    }

    handleJoinSeat(seatNum) {
        this.setState((state) => {
            if (state.playerJoined) {
                // TODO why firing twice?
                console.log("cannot join seat if already in table", seatNum);
            } else {
                // deepcopy array of objects
                let seatingArr = JSON.parse(JSON.stringify(state.seating));
                seatingArr[seatNum] = {
                    id: this.props.userName,
                    stack: this.props.userStack                
                };
                return {
                    playerJoined: true,
                    seating: seatingArr
                };
            }
        });
    }

    handleLeaveSeat(seat) {
        // TODO
    }

    render() {
        let i = -1;
        let seats = this.state.seating.map((player) => {
            ++i;
            if (Object.keys(player).length === 0) {
                return <Seat key={i} index={i} player={false} onJoinSeat={this.handleJoinSeat}/>;
            } else {
                return <Seat key={i} index={i} player={player}/>;
            }
        });
        console.log(seats);
        return (
            <React.Fragment>
                {seats}
            </React.Fragment>
        );
    }
}

export default Table;