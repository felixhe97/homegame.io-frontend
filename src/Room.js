import React from 'react';

import Log from './Log.js';
import Table from './Table.js';
import LoginForm from './LoginForm.js';

import PokerClientSocket from "./pokerClientSocket.js";

class Room extends React.Component {
    constructor(props) {
        super(props);
        // get info for table, ie ID, name, seats, blinds,
        // default timer, timebank, etc., then pass
        // as props here TODO
        this.state = {
            isLoggedIn: props.loggedIn
        };
        this.clientSocket = new PokerClientSocket('websocketaddresshereTODO');
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <React.Fragment>
                    <Log/>
                    <Table/>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <LoginForm socket={this.clientSocket}/>
                </React.Fragment>
            )
        }
    }
}

export default Room;