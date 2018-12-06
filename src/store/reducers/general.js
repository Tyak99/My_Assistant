import * as actionTypes from '../constants/actionTypes';

const initialState = {
    qod: {},
    location: null
}
export const general = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_QUOTE:
            return {
                ...state,
                qod: action.payload
            }
        case actionTypes.GET_LOCATION:
            return {
                ...state,
                location: action.data
            }
        default:
            return state
    }
}