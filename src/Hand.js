import React from 'react';

class Hand extends React.Component {
    constructor(props) {
        super(props);

    }

    // double click to show cards TODO

    render() {
        return (
            <section className="Hand">
                <Card />
                <Card />
            </section>
        );
    }
}