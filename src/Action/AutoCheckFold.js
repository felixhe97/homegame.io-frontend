import React from 'react';

import SelectButton from './SelectButton.js';

function AutoCheckFold(props) {
    return (
        <SelectButton 
            className="AutoCheckFold"
            onClick={props.onClick}    
        >
            Check/Fold
        </SelectButton>
    );
}

export default AutoCheckFold;