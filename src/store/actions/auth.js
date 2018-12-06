import * as actionTypes from "../constants/actionTypes";
import { LoginApi } from "variables/general";
import axios from 'axios';


export const checkAuthTimeout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expiresIn * 1000)
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
    localStorage.removeItem('token');
    localStorage.removeItem('id');
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
            console.log(error)
            dispatch(loginFailed(error))
        })
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        if(!token || !id) {
            dispatch(logout())
        } else {
            dispatch(loginSuccess(token, id))
        }
    }
}