import React, {useContext} from 'react';

// @ts-ignore
import logo from "../images/logo.png"

import './Header.css'
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../../authentication/auth-context";

const Header = () => {

    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    const navigateToControlPanel = () => {
        navigate('/Admin/Control-panel');
    };

    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToLogin = () => {
        auth.logout();
        navigate('/Login');
    };

    return (
        <div className={"row align-items-center memberships-headerBar"}>
            <div className={"col-1"}>
                <img className={"logo"} src={logo} />
            </div>
            <div className={"col-5"}>
                <h1 className={"mainHeader"}>ZAHTJEVI ZA ČLANSTVO</h1>
            </div>
            <div className={"col-2"}>
                <button onClick={navigateToControlPanel} type="button" className="btn btn-outline-info ">Admin Panel</button>
            </div>
            <div className={"col-2"}>
                <button onClick={navigateToHome} type="button" className="btn btn-outline-info ">Početna Stranica</button>
            </div>
            <div className={"col-1"}>
                <button onClick={navigateToLogin} type="button" className="btn btn-outline-info ">Logout</button>
            </div>


        </div>
    );
}

export default Header;