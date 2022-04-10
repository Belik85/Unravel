import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import MainPage from "./components/MainPage/mainpage";
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "./components/LoginForm/login";

// import Homepage from "../public/resources/Homepage.jpg"


function App() {


    // const navigate = useNavigate()


    // export function handleClick() {
    //      navigate('/Login')
    //  }

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


            {/*<Routes>*/}
            {/*    <Route path="/Login" element={*/}
            {/*        <>*/}

            {/*        </>*/}
            {/*    }/>*/}
            {/*</Routes>*/}

        </div>
    );
}

export default App;
