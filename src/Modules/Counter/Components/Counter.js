import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ increment, decrement, removeCounter, counter, idx }) => {
    return (
        <div className="Containers" id="Counter">
            <small>Counter Containers</small>
            <div className="Components">
                <small>Counter Components</small><br/><br/>
                Current counter value: {counter}
                <div><button onClick={(e) => decrement(1, idx)}>-</button></div>       
                <div><button onClick={(e) => increment(1, idx)}>+</button></div>
                <div><button onClick={(e) => removeCounter(idx)}>x</button></div>
                <br/>
            </div>
        </div>
    )
};

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
}

export default Counter;