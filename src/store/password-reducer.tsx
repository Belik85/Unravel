import {Dispatch} from "redux";

const SET_PASSWORD_VALUE = "SET_PASSWORD_VALUE"


type initialStateType = {
    value: string
}

type passwordValueActionType = {
    type: "SET_PASSWORD_VALUE",
    value: string,
}
const initialState = {
    value: ""
}


export const setPasswordValueReducer = (state: initialStateType = initialState, action: passwordValueActionType): initialStateType => {
    switch (action.type) {
        case "SET_PASSWORD_VALUE":
            return {...state, value: action.value}
        default:
            return state;
    }

}

export const passwordValueAC = (value: string): passwordValueActionType => {
    return {
        type: SET_PASSWORD_VALUE,
        value,
    }
}
