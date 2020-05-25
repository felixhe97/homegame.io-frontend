import React from 'react';

function Pot(props) {
    // display chips
    return (
        <div className="Pot">
            {props.amount}
        </div>
    );
}

export default Pot;