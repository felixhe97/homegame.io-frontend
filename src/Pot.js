import React from 'react';

/**
 * Display chip graphics and size
 * @param {*} props 
 */
function Pot(props) {
    return (
        <div className="Pot">
            {props.amount}
        </div>
    );
}

export default Pot;