import React, {useEffect} from 'react';
import './Redirect.css'
import {useNavigate} from "react-router-dom";

const Redirect = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <div className={"text-center position-absolute top-50 start-50 translate-middle"}>
            <h1 className={"register1"}>Hvala Vam na registraciji!</h1>
            <h4 className={"register1"}>Uskoro čemo Vas kontaktirati.</h4>
            <button onClick={navigateToHome} type="button" className="btn btn-outline-info">Početna Stranica</button>
        </div>
    );
}

export default Redirect;