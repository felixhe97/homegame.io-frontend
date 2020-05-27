import React from 'react';

// require pot size, min size, max size as props
class BetSizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0
        };
    }

    handleChange(event) {
        // if a button clicked reflect change given
        // prop of stack size
        this.setState(state => {
            let betSize = state.size;
            if (event.target.type == "button") {
                switch (event.target.text) {
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
                betSize = event.target.value;
            }
            return {size: betSize};
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state.size);
        event.preventDefault();
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
                <button 
                    type="button"
                    onClick={this.handleChange}
                >
                    1/4
                </button>
                <button 
                    onClick={this.handleChange}
                    type="button"
                >
                    1/3
                </button>
                <button 
                    type="button"
                    onClick={this.handleChange}
                >
                    1/2
                </button>
                <button 
                    type="button"
                    onClick={this.handleChange}
                >
                    2/3
                </button>
                <button 
                    type="button"
                    onClick={this.handleChange}
                >
                    3/4
                </button>
                <button 
                    type="button"
                    onClick={this.handleChange}
                >
                    Pot
                </button>
                <button 
                    type="button"
                    onClick={this.handleChange}
                >
                    Max
                </button>
                <input 
                    type="number" 
                    value={this.state.size} 
                />
            </form>
        );
    }
}

export default BetSizer;