import { ReducerUserType } from "../types/reducer";

interface ActionType {
    type: string
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

        default:
            return state
    }
}