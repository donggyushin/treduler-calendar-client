import { ReducerSelectedDate } from "types/reducer";
import { PUT_SELECTED_DATE } from "actions/types";

interface ActionType {
    type: string
    date: Date
}

const initialState: ReducerSelectedDate = {
    date: new Date()
}

export default function (state = initialState, action: ActionType): ReducerSelectedDate {
    switch (action.type) {
        case PUT_SELECTED_DATE:
            return putSelectedDate(state, action)
        default:
            return state
    }
}

function putSelectedDate(state: ReducerSelectedDate, action: ActionType): ReducerSelectedDate {
    return {
        ...state,
        date: action.date
    }
}
