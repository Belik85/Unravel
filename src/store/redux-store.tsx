import React from 'react';
import {applyMiddleware, combineReducers, createStore } from 'redux';
import {UserReduser} from "./user-reduser"

import {setLoginValueReducer} from './login-reduser';
import {setPasswordValueReducer} from './password-reducer';


import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({

    setLoginValue:  setLoginValueReducer,
    setPasswordValue: setPasswordValueReducer,

    login: UserReduser
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;