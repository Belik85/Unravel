import {Dispatch} from "redux";

const SET_LOGIN_VALUE = "SET_LOGIN_VALUE"


type initialStateType = {
    value: string
}

type loginValueActionType = {
    type: "SET_LOGIN_VALUE",
    value: string,
}
const initialState = {
    value: ""
}


export const setLoginValueReducer = (state: initialStateType = initialState, action: loginValueActionType): initialStateType => {
    switch (action.type) {
        case "SET_LOGIN_VALUE":
            return {...state, value: action.value}
        default:
            return state;
    }

}

export const loginValueAC = (value: string): loginValueActionType => {
    return {
        type: SET_LOGIN_VALUE,
        value,
    }
}
