import * as types from '../Constants/Counter';

const counter = (state = [0], action) => {
    switch (action.type) {
        case types.INCREMENT:
            return [
                ...state.slice(0, action.idx),
                state[action.idx] + 1,
                ...state.slice(action.idx + 1)];
        case types.DECREMENT:
            return [
                ...state.slice(0, action.idx),
                state[action.idx] - 1,
                ...state.slice(action.idx + 1)];
        case types.ADD_COUNTER:
            return [
                ...state, 0];
        case types.REMOVE_COUNTER:
            return [
                ...state.slice(0, action.idx),
                ...state.slice(action.idx + 1)];
        default:
            return state;
    }
}

export default counter;