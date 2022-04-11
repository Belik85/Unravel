import React, {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import b from '../LoginForm/login.module.css'
//import {getuser} from "../../store/user-reduser";
import {useDispatch, useSelector} from "react-redux";
import {loginUserAC} from '../../store/user-reduser'
import {loginValueAC} from '../../store/login-reduser'
import {useNavigate} from "react-router-dom";
import {AppRootStateType} from '../../store/redux-store'
import { passwordValueAC } from "../../store/password-reducer";
import {loginTC} from "../../store/user-reduser"
 
const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()


    const [inputValueLogin, setInputValueLogin] = useState<string>('cat')
    const [inputValuePassword, setInputValuePassword] = useState<string>('meow')


   
    const setLoginValue = useSelector<AppRootStateType, string>(state => state.setLoginValue.value)
    const setPasswordValue = useSelector<AppRootStateType, string>(state => state.setPasswordValue.value)



    const onChangeMainValue = () => {
        if (inputValuePassword && inputValueLogin){
            dispatch(loginTC({userName: inputValueLogin, passWord: inputValuePassword}))
        }
    }

    const onChangeLoginValue = (e:ChangeEvent<HTMLInputElement>) => {
        const inputLoginValue = e.currentTarget.value
        if (inputLoginValue.trim()) {
            setInputValueLogin(inputLoginValue)
        }
    }
        
       

    const  onChangePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputPasswordValue = e.currentTarget.value
        if (inputPasswordValue.trim()){
            setInputValuePassword(inputPasswordValue)
        }
        
    }
    

    return (
        <div>
            <div className={b.buttonBack}>
                <button onClick={(e) => {
                    navigate(-1)
                }}>Back
                </button>
            </div>

            <div><input value={inputValueLogin} onChange={onChangeLoginValue}></input></div>
            <div><input value={inputValuePassword} onChange={onChangePasswordValue}></input></div>

            <button onClick={onChangeMainValue}>Login</button>
            <div>Forgot password?</div>
        </div>
      
    )

}


export default Login