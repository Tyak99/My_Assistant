import * as actionTypes from "../constants/actionTypes";

const initialState = {
    loading: false,
    error: null,
    token: null,
    id: null,
    username: null
}

export const auth = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                token: action.token,
                id: action.id,
                username: action.username
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
                token: null
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                token: null,
                id: null
            }
        default:
            return state
    }
}