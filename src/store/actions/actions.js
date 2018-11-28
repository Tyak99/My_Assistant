import * as actionTypes from "../constants/actionTypes";


export const addExp = (name, amount) => {
    return {
        type: actionTypes.ADD_EXPENSE,
        payload: {
            name: name,
            amount: amount
        }
    }
}