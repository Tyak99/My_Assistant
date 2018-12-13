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
                loading: true
            }
        case actionTypes.GET_TASK_SUCCESS:
        const result = Object.values(action.data)
            return {
                ...state,
                loading: false,
                tasks: result
            }
        case actionTypes.GET_TASK_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        // case actionTypes.ADD_TASK:
        //     return {
        //         ...state,
        //         Addloading: true,
        //     }
        case actionTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.ADD_TASK_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.REMOVE_TASK:
            const sub = state.tasks.filter(task => task.id !== action.index)
            return {
                ...state,
                tasks: sub
            }
    }
    return state
}