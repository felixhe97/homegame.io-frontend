import React from "react";

import Community from './Community.js';
import Seat from '../Seat/Seat.js';
import Pot from './Pot.js';

import UserContext from '../UserContext.js';

// table has a middle thing for pot, seats circling, rotating button TODO
// the table has knowledge of each hand
// the room has knowledge of account balance, observers etc
// on each hand room passes table json of whom in each hand, updated stacks

class Table extends React.Component {
    constructor(props) {
        super(props);
        let tempMap = {};
        for (let player of props.players) {
            tempMap[player.seatNum.toString()] = {
                id: player.id,
                stack: player.stack
            };
        }
        let seating = [];
        for (let i = 0; i < props.seats; ++i) {
            if (i.toString() in tempMap) {
                seating.push(tempMap[i]);
            } else {
                seating.push({});
            }
        }
        this.state = {
            seating: seating,
            userSatDown: false
        }
        this.handleJoinSeat = this.handleJoinSeat.bind(this);
        this.handleLeaveSeat = this.handleLeaveSeat.bind(this);
    }

    handleJoinSeat(seatNum, player) {
        this.setState(state => {
            if (state.seating.find(p => p.id === player.id)) {

            } else {
                let seats = JSON.parse(JSON.stringify(state.seating));
                seats[seatNum] = player;
                if (player.id == this.context.id) {
                    return {
                        userSatDown: true,
                        seating: seats
                    };
                } else {
                    return {
                        seating: seats
                    };
                }
            }
        })
    }

    handleLeaveSeat(seatNum, player) {
        console.log('fired');
        this.setState(state => {
            if (state.seating[seatNum] == player) {
                let seats = JSON.parse(JSON.stringify(state.seating));
                seats[seatNum] = {};
                return {
                    seating: seats
                };
            }
        });
    }

    render() {
        let i = -1;
        console.log(this.state.seating);
        let seats = this.state.seating.map((player) => {
            ++i;
            if (Object.keys(player).length === 0 && !this.state.userSatDown) {
                return <Seat key={i} index={i} player={false} onClick={this.handleJoinSeat} />;
            } else if (player.id === this.context.id) {
                // TODO
                return <Seat key={i} index={i} player={this.context} onClick={this.handleLeaveSeat} />;
            } else {
                return <Seat key={i} index={i} player={player}/>;
            }
        });
        return (
            <main className="Table">
                <section className="Seats">
                    {seats}
                </section>
                <Community cards={['ah','2d','kc','4s']} amount={4230} />
            </main>
        );
    }
}

Table.contextType = UserContext;

export default Table;