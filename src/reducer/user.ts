import { ReducerUserType } from "../types/reducer";
import { USER_LOGIN } from "actions/types";

interface ActionType {
    type: string
    email: string
    name: string
    phone: string
    profile: string
}

const initialState: ReducerUserType = {
    email: "",
    name: "",
    phone: "",
    profile: "",
    isLoggedIn: localStorage.getItem('treduler') ? true : false
}

export default function (state = initialState, action: ActionType): ReducerUserType {
    switch (action.type) {
        case USER_LOGIN:
            return userLogin(state, action)
        default:
            return state
    }
}

function userLogin(state: ReducerUserType, action: ActionType): ReducerUserType {
    const { email, name, phone, profile } = action
    return {
        ...state,
        email,
        name,
        phone,
        profile,
        isLoggedIn: true
    }
}