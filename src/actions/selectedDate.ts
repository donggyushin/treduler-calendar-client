import { Dispatch } from "react";
import { PUT_SELECTED_DATE } from "./types";

interface IPutSelectedDateDispatch {
    type: string
    date: Date
}

export const putSelectedDate = (date: Date) => (dispatch: Dispatch<IPutSelectedDateDispatch>) => {
    return dispatch({
        type: PUT_SELECTED_DATE,
        date
    })
}