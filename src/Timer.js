import React from "react";

/**
 * Expects a props containing timeBank for account time left, 
 * and default time for overall game sent in as props
 */
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeBank: props.timeBank,
            timeLeft: props.defaultTime
        };
    }

    tick() {
        if (this.state.timeLeft > 0) {
            this.setState((state, props) => ({
                timeLeft: state.timeLeft - 1
            }));
            if (this.state.timeLeft === 0) {
                // switch to timeBank
            }
        } else {
            this.setState((state, props) => ({
                timeBank: state.timeBank - 1
            }));
            if (this.state.timeBank === 0) {
                // end turn
            }
        }
    }

    componentDidMount() {
        this.countdown = setInterval(()=>tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    render() {
        return (
            <meter className="HandTimer" min="0" max="100" low="33" high="66" optimum="80" value={this.state.timeLeft}>
                {this.state.defaultTime}
            </meter>
        );
    }
}

export default Timer;