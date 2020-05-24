import React from 'react';

import Pot from './Pot.js';

function Community(props) {
    let cardToDisplay = this.props.cards.map(card => {
        return <Card key={card} card={card} />
    });
    return (
        <section className="Community">
            <section className="CommunityCards">
                {cardToDisplay}
            </section>
            <section className="CommunityPot">
                <Pot amount={this.props.pot} />
            </section>
        </section>
    );
}

export default Community;