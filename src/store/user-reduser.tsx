

const LOGIN_USER = "LOGIN_USER";


const initialState = {
    user: null,
    isAuthenticated: false
}

export const UserReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_USER': {
            return { ...state, user: action.user, isAuthenticated:true}
        }
        default:
            return state
    }
}

// export const getuser = (data:any) => (dispatch:any) => {
//     const response = api.login(data)
//     dispatch(loginUserAC)
//     // dispatch({type: LOGIN_USER}, user: response.data)
// }



export const loginUserAC = (login: any) => {
    ({type: LOGIN_USER, user: login})
}