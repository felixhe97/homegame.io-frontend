import React from "react";

/**
 * Expects a props containing timeBank for account time left, 
 * and default time for default game time sent in as props
 */
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeBank: props.timeBank,
        };
    }

    tick() {
        if (this.state.timeBank > 0) {
            this.setState(state => ({
                timeBank: state.timeBank - 1
            }));
        }    
    }

    componentDidMount() {
        this.countdown = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    render() {
        return (
            <meter className="HandTimer" min="0" max="100" low="33" high="66" optimum="80" value={this.state.timeBank}>
                {this.state.timeBank}
            </meter>
        );
    }
}

export default Timer;