import * as actionTypes from "../constants/actionTypes";
import { LoginApi } from "variables/general";
import axios from 'axios';


export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}
export const loginSuccess = (token, localId) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        localId: localId
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
            console.log(response)
            dispatch(loginSuccess(response.data.idToken, response.data.localId))
        })
        .catch(error => {
            console.log(error.response.data.error.message)
            dispatch(loginFailed(error.response.data.error.message))
        })
    }
}