import { Dispatch } from "react";
import { USER_LOGIN } from "./types";

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