import React from "react";
import Timer from "./Timer.js";
import Card from "./Card.js";

function Avatar(props) {
    return (
        <img 
            className="avatar"
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

function PlayerCards(props) {
    let playerCards = this.props.cards.map(card => {
        return <Card key={card} card={card} onClick={props.handleClick} />
    });
    return (
        <div className="Player-Cards">
            {playerCards}
        </div>
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
                    <Avatar
                        imgURL="favicon.ico"
                        userName={this.props.player.id}
                    />
                    <Name userName={this.props.player.id} />
                    <StackSize size={this.props.player.stack} />
                    <PlayerCards cards={this.props.cards} />
                    <Timer timeBank={this.props.player.timeBank} />
                </section>
            );
        } else {
            return (
                <section className="PlayerInfo">
                    <Avatar
                        imgURL="favicon.ico"
                        userName={this.props.player.id}
                    />
                    <Name userName={this.props.player.id} />
                    <StackSize size={this.props.player.stack} />
                </section>
            );
        }
    }
}

export default Player;