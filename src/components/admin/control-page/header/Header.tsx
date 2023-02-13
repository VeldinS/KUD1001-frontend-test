import React, {useContext} from 'react';
import {AuthContext} from "../../../../authentication/auth-context";

// @ts-ignore
import logo from "../images/logo.png"

import './Header.css'
import {useNavigate} from "react-router-dom";

const Header = () => {

    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToLogin = () => {
        auth.logout();
        navigate('/Login');
    };

    return (
        <div className={"row align-items-center control-headerBar"}>
            <div className={"col-1"}>
                <img className={"logo"} src={logo} />
            </div>
            <div className={"col-7"}>
                <h1 className={"mainHeader"}>ADMIN PANEL</h1>
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