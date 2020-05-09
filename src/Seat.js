import React from "react";



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
        this.state = {
            userName : [], // get username
            avatarIMG: [], // get avatarIMG
            stackSize : 0  // get stackSize
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="PlayerInfo">
                <Avatar imgURL={this.state.avatarIMG} userName={this.state.userName}/>
                <Name userName={this.state.userName}/>
                <StackSize size={this.state.stackSize}/>
            </div>
        );
    }
    
}

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            available: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.available) {
            join().on()
        }
    }


    render() {
        // TODO
        return (
            <div className="Seat" onClick={this.handleClick}>

            </div>
        );
    }
}

export default Seat;