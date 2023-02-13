import React from 'react';

import './Control-Panel-content.css'

// @ts-ignore
import image1 from '../images/add.png'
// @ts-ignore
import image2 from '../images/edit.png'
// @ts-ignore
import image3 from '../images/question.png'
import {useNavigate} from "react-router-dom";

const ControlPanelContent = () => {

    const navigate = useNavigate();

    const navigateToAddActivity = () => {
        navigate('Activities/Add');
    };

    const navigateToSelectActivity = () => {
        navigate('Activities/Select');
    };

    const navigateToCheckMembership = () => {
        navigate('Memberships');
    };

    return (
        <div>
            <div className={"row row1"}>
                <div className={"col-3 box text-center rounded-4"} >
                    <div className={"cp-box1 rounded-top-4"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${image1})`, backgroundSize: "contain", }}>
                    </div>
                    <div className={"box2 "}>
                        <h2 className={"header1"}>NOVA AKTIVNOST</h2>
                        <button onClick={navigateToAddActivity} type="button" className="btn btn-outline-warning btn1">Postavi novu aktivnost!</button>
                    </div>
                </div>

                <div className={"col-3 box text-center rounded-4"} >
                    <div className={"cp-box1 rounded-top-4"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${image2})`, backgroundSize: "cover"}}>
                    </div>
                    <div className={"box2"}>
                        <h2 className={"header1"}>UREDI AKTIVNOSTI</h2>
                        <button onClick={navigateToSelectActivity} type="button" className="btn btn-outline-warning btn1">Odaberi aktivnost za uređivanje!</button>
                    </div>
                </div>

                <div className={"col-3 box text-center rounded-4"} >
                    <div className={"cp-box1 rounded-top-4"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${image3})`, backgroundSize: "cover", }}>
                    </div>
                    <div className={"box2"}>
                        <h2 className={"header1"}>ZAHTJEVI ZA ČLANSTVO</h2>
                        <button onClick={navigateToCheckMembership} type="button" className="btn btn-outline-warning btn1">Provjeri nove zahtjeve!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlPanelContent;