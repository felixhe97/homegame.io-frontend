import React from "react";
import Timer from "./Timer.js";

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
        <p className="stack">
            {props.size}
        </p>
    );
}

class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.inTurn) {
            return (
                <section className="PlayerInfo">
                    <Avatar imgURL="favicon.ico" userName={this.props.id}/>
                    <Name userName={this.props.id}/>
                    <StackSize size={this.props.stack}/>
                    <Timer timeBank={this.props.timeBank}/>
                </section>
            );
        } else {
            return (
                <section className="PlayerInfo">
                    <Avatar imgURL="favicon.ico" userName={this.props.id}/>
                    <Name userName={this.props.id}/>
                    <StackSize size={this.props.stack}/>
                </section>
            );
        }
    }
}

export default Player;