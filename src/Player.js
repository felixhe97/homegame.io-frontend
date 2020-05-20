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

function Player(props) {
    return (
        <div className="PlayerInfo">
            <Avatar imgURL={props.avatarIMG} userName={props.userName}/>
            <Name userName={props.userName}/>
            <StackSize size={state.stackSize}/>
            <Timer timeBank={} defaultTime={}/>
        </div>
    );
}

export default Player;