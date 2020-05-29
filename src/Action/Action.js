import React from 'react';

import AutoCheckFold from './AutoCheckFold.js';
import BetSizer from './BetSizer.js';

// menu where action takes place
class Action extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actionState: 3
        };
        this.checkFoldClick = this.checkFoldClick.bind(this);
    }

    checkFoldClick(b) {
        // immediately send if true
        this.setState(state => ({
            actionState: 4
        }));
    }

    render() {
        return (
            <React.Fragment>
                <AutoCheckFold onClick={this.checkFoldClick} />
                <BetSizer />
            </React.Fragment>
        );
    }
}

export default Action;