import React from 'react';

class BetSizer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="range"></input>
            <button type="button">1/4</button>
            <button type="button">1/3</button>
            <button type="button">1/2</button>
            <button type="button">2/3</button>
            <button type="button">3/4</button>
            <button type="button">Pot</button>
            <input type="number"></input>
        );
    }
}

// have all actions, like autocheck/fold, akin to 888poker, depending on current action allowed
class Action extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button>Fold</button>
            <button>Call</button>
        )
    }
}