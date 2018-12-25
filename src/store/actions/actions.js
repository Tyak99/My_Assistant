import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';
import { ExpenseApiUrl } from "variables/general";
import moment from 'moment';



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
export const add = (expense, token, userId) => {
    return dispatch => {
        dispatch(addStart())
        axios.post(`${ExpenseApiUrl}${token}`, expense) 
        .then(response => {
            dispatch(addExpSuccess(response.data))
            dispatch(getExp(token, userId))
        })
        .catch(error => {
            dispatch(addExpFailed(error))
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

export const getExp = (token, userId) => {
    return dispatch => {
        dispatch(getExpStart())
        const queryParams =`${ExpenseApiUrl}${token}&orderBy="userId"&equalTo="${userId}"`
            axios.get(queryParams)
            .then(response => {
                const Today = moment().format("DD/MM/YYYY")
                const result = Object.values(response.data)
                //fllter array to only show todays expenses
                const newResult = (result) => {
                    if(result.createdAt == Today) {
                    return true
                    }
                }
                const filteredResult = result.filter(newResult)
                //sort expenses to show new expenses first
                const sortedArray = filteredResult.sort((a,b) => b.timestamp - a.timestamp)
                dispatch(getExpSuccess(sortedArray))
            })
            .catch(error => {
                dispatch(getExpFailed(error))
            })
    }
}