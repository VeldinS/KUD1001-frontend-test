import React from 'react';
// @ts-ignore
import image1 from '../images/image1.png'
// @ts-ignore
import image2 from '../images/image2.png'
// @ts-ignore
import image3 from '../images/image3.png'
// @ts-ignore
import image4 from '../images/image4.png'
// @ts-ignore
import image5 from '../images/image5.png'
// @ts-ignore
import image6 from '../images/image6.png'
// @ts-ignore
import image7 from '../images/image7.png'

import './About-content.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router-dom";

const AboutContent = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <>
        <div className={"row about-row1"}>
            <div className={"col-7 about-box1"}>
                <h1 className={"about-header"}>Donec accumsan magna <br></br> et consectetur</h1>
                <p className={"p1"}> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna, sed consectetur erat dolor in nulla.pretium eget mi.pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna, Donec accumsan, magna et consectetur ul</p>
                <br/>
                <p> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna, sed consectetur erapretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna,t dolor in nulla.</p>
            </div>
            <div className={"col-5 about-box2"}>
                <div>
                    <img className={"img-fluid img-thumbnail"} src={image1}/>
                </div>
            </div>
        </div>

        <button onClick={navigateToHome} type="button" className="btn btn-outline-info fixed-bottom home-btn">Početna Stranica</button>

        <div className={"row about-row2"}>
            <div className={"col-5 about-box3"}>
                <img className={"img-fluid img-thumbnail"} src={image2}/>
            </div>
            <div className={"col-7 about-box4"}>
                <p> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna, sed consectetur erapretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna,t dolor in nulla.</p>
                <p> pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna, sed consectetur erapretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna,t dolor in nulla.
                    pretium eget mi. onsectetur erapretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna,t dolor in nulla.Donec accumsan, magna et consectetur ullamcorper, orci lorem
                    porttitor magna, sed c</p>
            </div>
        </div>

        <div className={"row about-row3"}>
            <div className={"col-3 text-center about-box5"}>
                <div>
                    <img className={"img-fluid fig-image"} src={image3}/>
                    <br></br>
                    <img className={"img-fluid fig-image1"} src={image7}/>
                    <p>Postojimo od 2009. godine</p>
                </div>
            </div>
            <div className={"col-3 text-center about-box5"}>
                <div>
                    <img className={"img-fluid fig-image"} src={image4}/>
                    <br></br>
                    <img className={"img-fluid fig-image1"} src={image7}/>
                    <p>200+ članova</p>
                </div>
            </div>
            <div className={"col-3 text-center about-box5"}>
                <div>
                    <img className={"img-fluid fig-image"} src={image5}/>
                    <br></br>
                    <img className={"img-fluid fig-image1"} src={image7}/>
                    <p>Posjetili preko 20 destinacija širom svijeta</p>
                </div>
            </div>
            <div className={"col-3 text-center about-box5"}>
                <div>
                    <img className={"img-fluid fig-image"} src={image6}/>
                    <br></br>
                    <img className={"img-fluid fig-image1"} src={image7}/>
                    <p>Brojimo preko 13 godina rada</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutContent;