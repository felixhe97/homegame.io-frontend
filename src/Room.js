import React from 'react';

import Log from './Log.js';
import Table from './Table.js';
import LoginForm from './LoginForm.js';
import Action from './Action/Action.js';

function getRoomInfo() {
    return {
        name: "testRoom",
        seats: 6,
        timeBank: 30,
        blinds: 50,
        players: [
            {
                id: "felix",
                stack: 1000,
                seatNum: 0
            },
            {
                id: "joe",
                stack: 200,
                seatNum: 2
            },
            {
                id: "ben",
                stack: 20,
                seatNum: 4,
            },
            {
                id: "subi",
                stack: 42,
                seatNum: 5
            }
        ]
    };
}

function RoomInfo(props) {
    return (
        <header>
            Table: {props.info.name}
            <br />
            Seats: {props.info.seats}
            <br />
            Blinds: {props.info.blinds / 2}/{props.info.blinds}NL
        </header>
    );
}

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            info: getRoomInfo()
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(userName, userStack) {
        this.setState({
            isLoggedIn: true,
            userName: userName,
            userStack: userStack
        });
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <React.Fragment>
                    <RoomInfo info={this.state.info} />
                    <Log />
                    <Table
                        userName={this.state.userName}
                        userStack={this.state.userStack}
                        numSeats={this.state.info.numSeats}
                        players={this.state.info.players}
                    />
                    <Action />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <LoginForm onSubmit={this.handleSubmit} />
                </React.Fragment>
            )
        }
    }
}

export default Room;