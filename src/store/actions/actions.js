import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';
import { ExpenseApiUrl } from "variables/general";



export const addStart = () => {
    return {
        type: actionTypes.ADD_EXPENSE_START
    }
}
export const addExpSuccess = (data) => {
    return {
        type: actionTypes.ADD_EXPENSE_SUCCESS,
        data: data
    }
}
export const addExpFailed = (error) => {
    return {
        type: actionTypes.ADD_EXPENSE_FAILED,
        error
    }
}
export const add = (name, amount) => {
    return dispatch => {
        const expense = {
            name: name,
            amount: amount,
                }
        dispatch(addStart())
        axios.post(ExpenseApiUrl, expense)
        .then(response => {
            console.log(response)
            dispatch(addExpSuccess(response.data))
            dispatch(getExp())
        })
        .catch(error => {
            dispatch(addExpFailed(error))
            console.log(error)
        })
    }
   
}
export const getExpStart = () => {
    return {
        type: actionTypes.GET_EXPENSE_START
    }
}
export const getExpSuccess = (data) => {
    return {
        type: actionTypes.GET_EXPENSE_SUCCESS,
        data: data
    }
}
export const getExpFailed = (error) => {
    return {
        type: actionTypes.GET_EXPENSE_FAILED,
        error: error
    }
}

export const getExp = () => {
    return dispatch => {
        dispatch(getExpStart())
            axios.get(ExpenseApiUrl)
            .then(response => {
                console.log(response.data)
                dispatch(getExpSuccess(response.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(getExpFailed(error))
            })
    }
}