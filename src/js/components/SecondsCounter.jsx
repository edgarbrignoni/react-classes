import React from 'react';
import PropTypes from 'prop-types';

class SecondsCounter extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>SecondsCounter.jsx</h1>
                <p>This is a seconds counter using just PROPS: {this.props.seconds}</p>
            </div>
        );
    }
}

export default SecondsCounter;

SecondsCounter.propTypes = {
    seconds : PropTypes.number
};