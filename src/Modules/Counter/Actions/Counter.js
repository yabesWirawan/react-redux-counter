import * as types from '../Constants/Counter';

export const increment = (val,idx) => {
    return {
        type: types.INCREMENT,
        val: val,
        idx: idx
    }
}

export const decrement = (val,idx) => {
    return {
        type: types.DECREMENT,
        val: val,
        idx: idx
    }
}

export const addCounter = () => {
    return {
        type: types.ADD_COUNTER
    }
}

export const removeCounter = (idx) => {
    return {
        type: types.REMOVE_COUNTER,
        idx: idx
    }
}