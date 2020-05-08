import React, {Component} from "react";

function Avatar(props) {
    return (
        <img className="avatar"
            src={props.imgURL}
            alt={props.userName}
        />
    );
}

function Name(props) {
    return (
        <h1 className="userName">
            {props.userName}
        </h1>
    );
}

function StackSize(props) {
    return (
        <div className="stack">
            {props.size}
        </div>
    );
}

class Player extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    render() {
        return (
            <div className="PlayerInfo">
                <Avatar imgURL={props.avatar} userName={props.name}/>
                <Name userName={props.name}/>
                <StackSize size={props.stackSize}/>
            </div>
        );
    }
    
}

class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            available: true
        };
    }

    onJoin() {

    }

    render() {
        // TODO
    }
}