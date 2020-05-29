import React from 'react';

import {Card} from '../Utils/Utils.js';
import Pot from './Pot.js';

function Community(props) {
    let cardToDisplay = props.cards.map(card => {
        return <Card key={card} card={card} />
    });
    return (
        <section className="Community">
            <section className="Community-Cards">
                {cardToDisplay}
            </section>
            <section className="Community-Pot">
                <Pot amount={props.pot} />
            </section>
        </section>
    );
}

export default Community;