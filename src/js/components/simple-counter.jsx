// import React, { Component } from "react";
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    handleClick() {
        this.props.onClickFunction(this.props.incrementValue);
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    }
}

Button.propTypes = {
    incrementValue: PropTypes.number,
    onClickFunction: PropTypes.function
};

const Result = (props) => {
    return (
        <div>
            {props.counter}
        </div>
    );
};

Result.propTypes = {
    counter: PropTypes.number
};

class SimpleCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            incrementCounter: 0
        };
    }

    incrementCounter = (incrementValue) => {
        this.setState({
            counter: this.counter + incrementValue
    });
  };

  render() {
    return (
        <div>
            <Button incrementValue={1} onClickFunction={this.incrementCounter} />
            <Button incrementValue={10} onClickFunction={this.incrementCounter} />
            <Button incrementValue={100} onClickFunction={this.incrementCounter} />
            <Button incrementValue={1000} onClickFunction={this.incrementCounter} />
            <Result counter={this.state.counter} />
        </div>
    );
  }
}

export default SimpleCounter;