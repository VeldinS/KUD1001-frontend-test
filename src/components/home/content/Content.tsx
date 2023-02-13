import React from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
// @ts-ignore
import image1 from '../images/image1.jpg';
// @ts-ignore
import image2 from '../images/image2.jpg';
// @ts-ignore
import image3 from '../images/image3.png';

import 'bootstrap/dist/css/bootstrap.css';
import './Content.css'


const Content = () => {

    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/About');
    };

    const navigateToActivities = () => {
        navigate('/Activities');
    };

    const navigateToRegister = () => {
        navigate('/Register');
    };

    return (
        <div className={"row row1"}>
            <div className={"col-3 box text-center rounded-4"} >
                <div className={"box1 rounded-top-4"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${image1})`, backgroundSize: "cover", }}>
                    <h2 className={"header1"}>O NAMA</h2>
                </div>
                <div className={"box2 "}>
                    <p className={"p1"}> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                        porttitor magna, sed consectetur erat dolor in nulla.pretium eget mi. Donec accumsan, magna et consectetur ul</p>
                    <br/>
                    <p className="p1"> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                        porttitor magna, sed consectetur erat dolor in nulla.</p>
                    <br/>
                    <button onClick={navigateToAbout} type="button" className="btn btn-outline-warning btn1">Više o nama!</button>
                </div>
            </div>

            <div className={"col-3 box text-center rounded-4"} >
                <div className={"box1 rounded-top-4"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${image2})`, backgroundSize: "cover", }}>
                    <h2 className={"header1"}>AKTIVNOSTI</h2>
                </div>
                <div className={"box2"}>
                    <p className={"p1"}> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                        porttitor magna, sed consectetur erat dolor in nulla.pretium eget mi. Donec accumsan, magna et consectetur ul</p>
                    <br/>
                    <p className="p1"> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                        porttitor magna, sed consectetur erat dolor in nulla.</p>
                    <br/>
                    <button onClick={navigateToActivities} type="button" className="btn btn-outline-warning btn1">Sve aktivnosti!</button>
                </div>
            </div>

            <div className={"col-3 box text-center rounded-4"} >
                <div className={"box1 rounded-top-4"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${image3})`, backgroundSize: "cover", }}>
                    <h2 className={"header1"}>POSTANI ČLAN</h2>
                </div>
                <div className={"box2"}>
                    <p className={"p1"}> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                        porttitor magna, sed consectetur erat dolor in nulla.pretium eget mi. Donec accumsan, magna et consectetur ul</p>
                    <br/>
                    <p className="p1"> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                        porttitor magna, sed consectetur erat dolor in nulla.</p>
                    <br/>
                    <button onClick={navigateToRegister} type="button" className="btn btn-outline-warning btn1">Postani član!</button>
                </div>
            </div>
        </div>
    );
}

export default Content;