import React from 'react';

// @ts-ignore
import logo from "../images/logo.png"

import './Header.css'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToActivities = () => {
        navigate('/Activities');
    };

    return (
        <div className={"row align-items-center login-headerBar"}>
            <div className={"col-1"}>
                <img className={"logo"} src={logo} />
            </div>
            <div className={"col-9"}>
                <h1 className={"mainHeader"}>BRISANJE AKTINVOSTI</h1>
            </div>
            <div className={"col-2"}>
                <button onClick={navigateToHome} type="button" className="btn btn-outline-info ">Početna Stranica</button>
            </div>


        </div>
    );
}

export default Header;