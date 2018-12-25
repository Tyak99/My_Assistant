import * as actionTypes from "../constants/actionTypes";
import { LoginApi, RegisterApi, SetDisplayName } from "variables/general";
import axios from 'axios';


export const checkAuthTimeout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expiresIn * 1000)
    }
}

export const registerSuccess = (data) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        data: data
    }
} 
export const register  = (email, password, username) => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    return dispatch => {
        axios.post(RegisterApi, authData)
        .then(response => {
            dispatch(registerSuccess())
            dispatch(loginSuccess(response.data.idToken, response.data.localId, username))
            dispatch(userInfo(username, response.data.idToken))
        })
        .catch(error => {
        })
    }
}

// Set the Display name of the user... 
export const userInfo = (username, token) => {
    const userData = {
        idToken: token,
        displayName: username,
        returnSecureToken: false
    }
    return dispatch => {
        axios.post(SetDisplayName, userData)
        .then(response => {

        })
        .catch(error => {
        })
    }
}

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}
export const loginSuccess = (token, id, username) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        id: id,
        username: username
    }
}
export const loginFailed = (error) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error: error
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
            const token = response.data.idToken
            const id = response.data.localId
            const username = response.data.displayName
            const expiryTime = new Date(new Date().getTime() + response.data.expiresIn * 1000)
            dispatch(loginSuccess(token, id, username))
            dispatch(checkAuthTimeout(response.data.expiresIn))
            //save token and id to localstorage
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            localStorage.setItem('username', username)
            localStorage.setItem('expirationDate', expiryTime)
        })
        .catch(error => {
            dispatch(loginFailed(error))
        })
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('expirationDate')

    return {
        type: actionTypes.LOGOUT
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        const username = localStorage.getItem('username')
        const expirationDate = new Date(localStorage.getItem('expirationDate'))
        if(!token || !id) {
            dispatch(logout())
        } else if (new Date() > expirationDate) {
            dispatch(logout())
        } else {
            dispatch(loginSuccess(token, id, username))
            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
        }
    }
}