import {Dispatch} from "redux";
import {authAPI, LoginDataType} from "../server/api";

const LOGIN_USER = "LOGIN_USER";


const initialState = {
    user: '',
    isAuthenticated: false
}

export const UserReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_USER': {
            return {...state, user: action.user, isAuthenticated: true}
        }
        default:
            return state
    }
}


export const loginTC = (data: LoginDataType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then((res) => {
            if (res.status === 200) {
                dispatch(loginUserAC("login"))
            } else {
                (res.data, dispatch);
            }
        })
}


export const loginUserAC = (login: string) => ({type: LOGIN_USER, user: login} as const)