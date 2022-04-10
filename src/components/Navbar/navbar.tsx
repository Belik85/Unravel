import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Login from "../LoginForm/login";
import b from "../Navbar/navbar.module.css"

const Navbar = (props:any) => {

    return <div className={b.buttonStyle}>
        <Link to={"/login"}>
           <button >Login</button>
        </Link>
  </div>

}


export default Navbar