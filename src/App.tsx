import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import MainPage from "./components/MainPage/mainpage";
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "./components/LoginForm/login";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar/>
                        <img src={"/resources/Homepage.png"} alt={'Yo'}/>
                        <MainPage/>
                    </>
                }/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
