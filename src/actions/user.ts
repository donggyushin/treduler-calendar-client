import { Dispatch } from "react";
import { USER_LOGIN, USER_LOGOUT } from "./types";

interface IUserLogoutDispatch {
    type: string
}

export const userLogout = () => (dispatch: Dispatch<IUserLogoutDispatch>) => {
    localStorage.removeItem('treduler')
    return dispatch({
        type: USER_LOGOUT
    })
}

interface IUserLoginDispatch {
    type: string
    email: string
    name: string
    phone: string
    profile: string
}

export const userLogin = (email: string, name: string, profile: string, phone: string, jwt: string) => (dispatch: Dispatch<IUserLoginDispatch>) => {

    localStorage.setItem('treduler', jwt)

    return dispatch({
        type: USER_LOGIN,
        email,
        name,
        phone,
        profile
    })
}