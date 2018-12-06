import * as actionTypes from '../constants/actionTypes';

const initialState = {
    qod: {}
}
export const quote = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_QUOTE:
            return {
                ...state,
                qod: action.payload
            }
        default:
            return state
    }
}