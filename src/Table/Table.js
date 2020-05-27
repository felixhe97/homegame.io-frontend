import React from "react";

// table has a middle thing for pot, seats circling, rotating button TODO
// the table has knowledge of each hand
// the room has knowledge of account balance, observers etc
// on each hand room passes table json of whom in each hand, updated stacks

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.handleJoinSeat = this.handleJoinSeat.bind(this);
        this.handleLeaveSeat = this.handleLeaveSeat.bind(this);
    }

    handleJoinSeat(seatNum) {

    }

    handleLeaveSeat(seat) {
        
    }

    render() {
        let i = -1;
        let seats = this.state.seating.map((player) => {
            ++i;
            if (Object.keys(player).length === 0) {
                return <Seat key={i} index={i} player={false} onJoinSeat={this.handleJoinSeat}/>;
            } else {
                return <Seat key={i} index={i} player={player}/>;
            }
        });
        return (
            <main className="Table">
                <section className="Seats">
                    {seats}
                </section>
                <Community cards={['ah','2d','kc','4s']} amount={4230} />
            </main>
        );
    }
}

export default Table;