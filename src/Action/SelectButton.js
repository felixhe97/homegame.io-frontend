import React from 'react';

class SelectButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState(state => {
            let isClicked = !state.click;
            this.props.onClick(isClicked);
            return {click: isClicked};
        });
        event.preventDefault();
    }

    render() {
        return (
            <button 
                className={this.props.className + this.state.click ? " Selected" : ""} 
                type="button" 
                onClick={this.handleClick}
            >
                {this.props.children}
            </button>
        );
    }
}

export default SelectButton;