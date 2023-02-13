import React, {useEffect, useState} from 'react';

// @ts-ignore
import logo from "../images/logo.png"

import './Header.css'
import {useNavigate, useParams} from "react-router-dom";

interface Activity {
    _id: string;
    name: string;
}

const Header = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToActivities = () => {
        navigate('/Activities');
    };

    return (
        <div className={"row align-items-center activity-headerBar"}>
            <div className={"col-1"}>
                <img className={"logo"} src={logo} />
            </div>
            <div className={"col-7"}>
                <h1 className={"mainHeader"}>Naziv Aktivnosti</h1>
            </div>
            <div className={"col-2"}>
                <button onClick={navigateToHome} type="button" className="btn btn-outline-info ">Početna Stranica</button>
            </div>
            <div className={"col-2"}>
                <button onClick={navigateToActivities} type="button" className="btn btn-outline-info ">Sve Aktivnosti</button>
            </div>

        </div>
    );
}

export default Header;