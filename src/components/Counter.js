import React, { Component } from 'react';

export default class Counter extends Component {

    constructor (props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }

    render () {
        return (
            <div className="counter">
                <h4>{this.state.counter}</h4>
                <button onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
        );
    }
}