import * as actionTypes from "../constants/actionTypes";

export const removeTask = (index) => {
    return {
        type: actionTypes.REMOVE_TASK,
        index: index
    }
}