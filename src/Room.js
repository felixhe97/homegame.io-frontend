import React from 'react';

import Log from './Log.js';
import Table from './Table.js';
import LoginForm from './LoginForm.js';

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
            isLoggedIn: props.loggedIn,
            userName: "",
            userStack: 0,
            tableName: props.tableInfo.tableName,
            numSeats: props.tableInfo.seats,
            timeBank: props.tableInfo.timeBank,
            blinds: props.tableInfo.blinds
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
                    <RoomInfo info={this.props.tableInfo} />
                    <Log />
                    <Table
                        userName={this.state.userName}
                        userStack={this.state.userStack}
                        numSeats={this.state.numSeats}
                        players={this.props.tableInfo.players}
                    />
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