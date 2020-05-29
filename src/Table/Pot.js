import React from 'react';

/**
 * Display chip graphics and size
 * @param {*} props 
 */
function Pot(props) {
    return (
        <p className="Pot">
            {props.amount}
        </p>
    );
}

export default Pot;