import React from 'react';

import Log from './Log.js';
import Table from './Table.js';

class Room extends React.Component {
    constructor(props) {
        super(props);
        // get info for table, ie ID, name, seats, blinds,
        // default timer, timebank, etc., then pass
        // as props here TODO
    }

    render() {
        return (
            <div className="Room">
                <Log/>
                <Table/>
            </div>
        );
    }
}

export default Room;