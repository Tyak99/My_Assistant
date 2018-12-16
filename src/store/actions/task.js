import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';


export const getTask = () => {
    return {
        type: actionTypes.GET_TASK
    }
}
export const getTaskSuccess = (data) => {
    return {
        type: actionTypes.GET_TASK_SUCCESS,
        data: data
    }
}
export const getTaskFailed = (error) => {
    return {
        type: actionTypes.GET_TASK_FAILED,
        error: error
    }
}

export const task = () => {
    return dispatch => {
        dispatch(getTask())
        axios.get("https://my-assistant-82a1a.firebaseio.com/tasks.json")
        .then(response => {
            console.log(response.data)
            dispatch(getTaskSuccess(response.data))
        })
        .catch(error => {
            console.log(error)
            dispatch(getTaskFailed(error))
        })
    }
}

export const addTask = () => {
    return {
        type: actionTypes.ADD_TASK
    }
}
export const addTaskSuccess = (data) => {
    return {
        type: actionTypes.ADD_TASK_SUCCESS,
        data: data
    }
}
export const addTaskFailed = (error) => {
    return {
        type: actionTypes.ADD_TASK_FAILED,
        error
    }
}
export const add = (taskData) => {
    return dispatch => {
        dispatch(addTask())
        axios.post("https://my-assistant-82a1a.firebaseio.com/tasks.json", taskData)
        .then(response => {
            console.log(response)
            dispatch(task())
            dispatch(addTaskSuccess(response.data))
        })
        .catch(error => {
            console.log(error)
            dispatch(addTaskFailed(error))
        })
    }
   
}
export const removeTask = (index) => {
    return {
        type: actionTypes.REMOVE_TASK,
        index: index
    }
}