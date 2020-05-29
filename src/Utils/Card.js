import React from 'react';

/**
 * [card]={String representing card}
 * [onClick]={callback to handle mouse click}
 */
export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onClick(this.props.card);
        event.preventDefault();
    }

    render() {
        if (this.props.card) {
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
            }
            if (this.props.onClick) {
                <div className="Card" onClick={this.handleClick}>
                    <p className={"Card-Number"}>
                        {this.props.card[0].toUpperCase()}
                    </p>
                    <p className="Card-Suit">
                        {suit}
                    </p>
                </div>
            } else {
                <div className="Card">
                    <p className={"Card-Number"}>
                        {this.props.card[0].toUpperCase()}
                    </p>
                    <p className="Card-Suit">
                        {suit}
                    </p>
                </div>
            }
        } else {
            return (
                <div className="BackOfCard"></div>
            )
        }
    }
}