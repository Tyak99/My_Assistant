import * as actionTypes from "../constants/actionTypes";
import { LoginApi } from "variables/general";
import axios from 'axios';


export const checkAuthTimeout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expiresIn)
    }
}
export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}
export const loginSuccess = (token, id) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        id: id
    }
}
export const loginFailed = (error) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export const login = (email, password) => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    return dispatch => {
        dispatch(loginStart())
        axios.post(LoginApi, authData)
        .then(response => {
            console.log(response)
            const token = response.data.idToken
            const id = response.data.localId
            dispatch(loginSuccess(token, id))
            dispatch(checkAuthTimeout(response.data.expiresIn))
            //save token and id to localstorage
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
        })
        .catch(error => {
            console.log(error.response.data.error.message)
            dispatch(loginFailed(error.response.data.error.message))
        })
    }
}