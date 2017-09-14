import React from 'react';
import Counter from '../Containers/Counter';
import PropTypes from 'prop-types';

const CounterList = ({ counters, addCounter }) => {
    return (
        <div className="Containers" id="CounterList">
            <small>CounterList Containers</small>
            <div className="Components">
                <small>CounterList Components</small>            
                <div>
                    {counters.map((counter,index) => (
                        <Counter id={index} key={index} {...counter}/>
                    ))}
                    <button onClick={(e) => addCounter()}>Add Counter</button>
                </div>
            </div>
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.arrayOf(
        PropTypes.number.isRequired,
    ).isRequired,
};

export default CounterList;