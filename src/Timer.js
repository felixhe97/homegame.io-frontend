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
            <h1 className="HandTimer">
                {this.state.defaultTime}
            </h1>
        );
    }
}

export default Timer;