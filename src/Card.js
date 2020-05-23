import React from 'react';

// perhaps a backofcard then faceupcard TODO
function Card(props) {
    let suit;
    switch (props.card[1]) {
        case 's':
            suit = "&spades;";
            break;
        case 'd':
            suit = "&diams;";
            break;
        case 'h':
            suit = "&hearts;";
            break;
        case 'c':
            suit = "&clubs;";
            break;
        default:
            suit = "?";
    }
    return (
        <div className="Card">
            <p className="Card-Number">
                {props.card[0].toUpperCase()}
            </p>
            <p className="Card-Suit">
                {suit}
            </p>
        </div>
    )
}

export default Card;