import React from 'react';
import {applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import {UserReduser} from "./user-reduser"
import thunkMiddleware from "redux-thunk";


let rootReducer = combineReducers({
    login: UserReduser

})


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;

