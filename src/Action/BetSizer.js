import React from 'react';

function BetButton(props) {
    return (
        <button type="button" onClick={props.onClick}>
            {props.multiplier}
        </button>
    );
}

/**
 * potSize={Number}
 * minSize={Number}
 * maxSize={Number}
 */
class BetSizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // if a button clicked reflect change given
        // prop of stack size
        let targetType = event.target.type;
        let targetText = event.target.textContent;
        let targetVal = event.target.value;
        this.setState(state => {
            let betSize = state.size;
            if (targetType== "button") {
                switch (targetText) {
                    case "1/4":
                        betSize = Math.round(this.props.potSize / 4);
                        break;
                    case "1/3":
                        betSize = Math.round(this.props.potSize / 3);
                        break;
                    case "1/2":
                        betSize = Math.round(this.props.potSize / 2);
                        break;
                    case "2/3":
                        betSize = Math.round(this.props.potSize * 2 / 3);
                        break;
                    case "3/4":
                        betSize = Math.round(this.props.potSize * 3 / 4);
                        break;
                    case "Pot":
                        betSize = this.props.potSize;
                        break;
                    case "Max":
                        betSize = this.props.maxSize;
                        break;
                }
            } else {
                betSize = targetVal;
            }
            if (betSize < this.props.minSize) {
                betSize = this.props.minSize;
            }
            if (betSize > this.props.maxSize) {
                betSize = this.props.maxSize;
            }
            return {size: betSize};
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.size < this.props.minSize || this.state.size > this.props.maxSize) {
            console.log("error cannnot give backend improper bet sizing");
        } else {
            this.props.onSubmit(this.state.size);
        }
    }

    render() {
        return (
            <form 
                className="BetSizer" 
                onSubmit={this.handleSubmit}
            >
                <input 
                    type="range" 
                    min={this.props.minSize} 
                    max={this.props.maxSize}
                    value={this.state.size}
                    onChange={this.handleChange}
                />
                <BetButton onClick={this.handleChange} multiplier="1/4" />
                <BetButton onClick={this.handleChange} multiplier="1/3" />
                <BetButton onClick={this.handleChange} multiplier="1/2" />
                <BetButton onClick={this.handleChange} multiplier="2/3" />
                <BetButton onClick={this.handleChange} multiplier="3/4" />
                <BetButton onClick={this.handleChange} multiplier="Pot" />
                <BetButton onClick={this.handleChange} multiplier="Max" />
                <input 
                    type="number" 
                    value={this.state.size} 
                    onChange={this.handleChange}
                />
                <button type="submit">Bet</button>
            </form>
        );
    }
}

export default BetSizer;