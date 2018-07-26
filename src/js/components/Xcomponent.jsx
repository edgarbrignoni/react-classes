import React from 'react';
import PropTypes from 'prop-types';

class Xcomponent extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            theValue : 'theValue',
            mycity: ''
        };
    }
    
    render() {
        let mycity = this.props.city;
        return (
            <div>
                <h1>Xcomponent.jsx</h1>
                <p>(Combining PROPS and STATES)</p>
                <span>This PROP was pass from the index.js: {this.props.city}</span>
                <br /><p></p>
                <span>Click on the buttons below to change the STATE: {this.state.theValue}</span>
                <br /><p></p>
                <button onClick={ () => this.setState({theValue: "Hello"}) }>
                    Change {this.state.theValue} to Hello
                </button>
                <span> </span>
                <button onClick={ () => this.setState({theValue: "Soccer"}) }>
                    Change {this.state.theValue} to Soccer
                </button>
                <span> </span>
                <button onClick={ () => this.setState({theValue: "Bye"}) }>
                    Change {this.state.theValue} to Bye
                </button>
            </div>
        );
    }    
}

export default Xcomponent;

Xcomponent.propTypes = {
    city : PropTypes.string
};