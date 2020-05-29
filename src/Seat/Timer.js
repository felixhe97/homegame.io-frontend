import React from "react";

/**
 * defaultTime={Number for hand time}
 * timeBank={Number for account timebank}
 */
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: props.defaultTime,
            timeBank: props.timeBank,
        };
    }

    tick() {
        this.setState(state => {
            if (state.timer > 0) {
                return {
                    timer: state.timer - 1
                };
            } else if (state.timeBank > 0) {
                return {
                    timeBank: state.timeBank - 1
                };
            } else {
                // acknowledge hand timeout from server
            }
        });
    }

    componentDidMount() {
        this.countdown = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    render() {
        if (this.state.timer > 0) {
            return (
                <meter 
                    className="HandTimer" 
                    min="0" 
                    max={this.props.defaultTime}
                    low={this.props.defaultTime / 3} 
                    high={this.props.defaultTime * 3 / 4}
                    value={this.state.timer}
                />
            );
        } else {
            return (
                <meter 
                    className="HandTimer" 
                    min="0" 
                    max={this.props.timeBank}
                    low={this.props.timeBank} 
                    value={this.state.timeBank}
                />
            );
        }
    }
}

export default Timer;