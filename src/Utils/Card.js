import React from 'react';

/**
 * require card and onClick
 */
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onClick(this.props.card);
        event.preventDefault();
    }

    render() {
        if (this.props.card.length) {
            let suit;
            let cardColor;
            switch (this.props.card[1]) {
                case 's':
                    suit = "&spades;";
                    cardColor = "Black";
                    break;
                case 'd':
                    suit = "&diams;";
                    cardColor = "Orange";
                    break;
                case 'h':
                    suit = "&hearts;";
                    cardColor = "Red";
                    break;
                case 'c':
                    suit = "&clubs;";
                    cardColor = "Green";
                    break;
                default:
                    suit = "";
            }
            return (
                <div className={cardClass} onClick={this.handleClick}>
                    <p className={"Card-Number"}>
                        {props.card[0].toUpperCase()}
                    </p>
                    <p className="Card-Suit">
                        {suit}
                    </p>
                </div>
            );
        } else {
            return (
                <div className="BackOfCard"></div>
            )
        }
    }
}

Card.defaultProps = {
    card: "",
    onClick: null
};

export default Card;