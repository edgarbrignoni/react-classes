import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    
    render() {
        let {count} = this.state;
        return (
            <div>
                <h1>Counter.jsx</h1>
                <p>This is a counter using just STATE: </p>
                <button
                    onClick={() => this.setState({count: count + 1})}
                >
                    Increment counter
                </button>
                <span> </span>
                <button
                    onClick={() => this.setState({count: count - 1})}
                >
                    Decrease counter
                </button>
                <br /><p></p>
                <p>Count: {count}</p>
            </div>
        );
    }
}

export default Counter;