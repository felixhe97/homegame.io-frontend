import Player from './Player.js';

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.onJoinSeat(this.props.index);
        event.preventDefault();
    }

    render() {
        let seat;
        if (!this.props.player) {
            seat = <button className="Seat" onClick={this.handleClick}>Click to sit down.</button>;
        } else {
            seat = <Player player={this.props.playerInfo}/>;
        }
        return (
            <section className="Seat">
                {seat}
            </section>
        );
    }
}

export default Seat;