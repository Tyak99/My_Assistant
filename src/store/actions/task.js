import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';
import { TaskApi } from 'variables/general';


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

export const task = (token, userId) => {
    return dispatch => {
        const Url = `${TaskApi}/${userId}.json?auth=${token}`
        dispatch(getTask())
        axios.get(Url)
        .then(response => {
            //recieve the response of tasks in the database as object and convert it to array
            const data = Object.values(response.data)
            //sort the array by timestamp. so the latest data can be at the top
            const sortedArray = data.sort((a,b) => b.timestamp - a.timestamp)
            dispatch(getTaskSuccess(sortedArray))
        })
        .catch(error => {
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
export const add = (userId, taskData, token) => {
    return dispatch => {
        const Url = `${TaskApi}/${userId}/${taskData.timestamp}.json?auth=${token}`
        dispatch(addTask())
        axios.put(Url, taskData)
        .then(response => {
            dispatch(task(token, userId))
             dispatch(addTaskSuccess(response.data))
        })
        .catch(error => {
        })
    }
}
export const removeTask = (index) => {
    return {
        type: actionTypes.REMOVE_TASK,
        index: index
    }
}

export const rem = (userId, timestamp, token) => {
    return dispatch => {
        const Url = `${TaskApi}${userId}/${timestamp}.json?auth=${token}`
        dispatch(removeTask(timestamp))
        axios.delete(Url)
        .then(response => {
        })
    }
}