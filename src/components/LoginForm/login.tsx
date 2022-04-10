import React, {useEffect, useState} from "react";
import axios from "axios";
import b from '../LoginForm/login.module.css'
//import {getuser} from "../../store/user-reduser";
import {useDispatch, useSelector} from "react-redux";
import {loginUserAC} from '../../store/user-reduser'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch()


    // console.log(useSelector(state => state))
    // useEffect(() => {
    //     axios.post('http://localhost:12000/login', {
    //             "userName": "cat",
    //             "passWord": "meow"
    //         }
    //     ).then((res) => dispatch(loginUserAC(res.data)))



        //dispatch(getuser())

    // }, [])


    return (
        <div>
            <div className={b.buttonBack}><button onClick={(e) => {
                navigate(-1)
            }}>Back
            </button></div>

            <div>Login</div>
            <div><input></input></div>
            <div><input></input></div>
            <button>Login</button>
            <div>Forgot password?</div>
        </div>
    )
}


export default Login



