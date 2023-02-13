import React from 'react';

// @ts-ignore
import logo from "../images/logo.png"

import './Header.css'
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const navigateToInfo = () => {
        navigate('/Information');
    };

    const navigateToLogin = () => {
        navigate('/Login');
    };

    return (
        <div className={"row align-items-center header"}>
            <div className={"col-4"}>
                <img className={"logo"} src={logo} />
            </div>
            <div className={"col-5"}>
                <h1 className={"mainHeader"}>KUD "1001 noć" Fojnica</h1>
            </div>
            <div className={"col-1"}>
                <button onClick={navigateToInfo} className={"link1"}>Kontakt</button>
            </div>
            <div className={"col-1"}>
                <button onClick={navigateToInfo} className={"link1"}>Lokacija</button>
            </div>
            <div className={"col-1"}>
                <button onClick={navigateToLogin} className={"link1"}>Login</button>
            </div>
        </div>
    );
}

export default Header;