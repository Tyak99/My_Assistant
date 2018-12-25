import * as actionTypes from "../constants/actionTypes";


const initialState = {
    tasks: null,
    loading: false,
    error: null
}

export const tasks = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_TASK:
            return {
                ...state,
            }
        case actionTypes.GET_TASK_SUCCESS:
            return {
                ...state,
                tasks: action.data
            }
        case actionTypes.GET_TASK_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.ADD_TASK:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actionTypes.ADD_TASK_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.REMOVE_TASK:
            const sub = state.tasks.filter(task => task.timestamp !== action.index)
            return {
                ...state,
                tasks: sub
           }
        default: 
           return state
    }
}