import React from "react";

// 3 buttons on top, one is hand history, one is banter chat, one is game announcements
// all default clicked, if one clicked then hide that particular log,
// dull the button, then if updates make thing bold

function ListItem(props) {
    return <li>{props.value}</li>;
}

function MessageList(props) {
    const chatItems = props.chatMessages.map((msg) => {
        return <ListItem key={msg.uid} value={msg}/>
    });
    return (
        <ul>{chatItems}</ul>
    );
}

class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handHistory: true,
            banter: true,
            announcements: true,
            chatHistory: [],
            toDisplay: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let name = event.target.name;
        this.setState(state => ({
            [name]: !state[name],
            toDisplay: state.chatHistory.filter((msg) => {
                return state[msg.type];
            })
        }));
    }

    render() {
        return (
            <aside className="Log">
                <button name="handHistory" type="button" onClick={this.handleClick}>Hand History</button>
                <button name="banter" type="button" onClick={this.handleClick}>Banter</button>
                <button name="announcements" type="button" onClick={this.handleClick}>Game Announcements</button>
                <MessageList chatMessages={this.state.toDisplay}/>
            </aside>
        );
    }
}

export default Log;