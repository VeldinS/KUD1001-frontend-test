import React from 'react';
// @ts-ignore
import logo1 from './images/phone-logo.png'
// @ts-ignore
import logo2 from './images/outlook-logo.png'
// @ts-ignore
import logo3 from './images/facebook-logo.png'

import './Information.css'
import Map from "./map/Map";

const Information = () => {
    return (
        <div>
            <div className={"row info-row1"}>
                <div className={"col-4 text-center"}>
                    <img className={"img-fluid info-logo"} src={logo1} />
                    <h4>030-XXX-XXX</h4>
                </div>
                <div className={"col-4 text-center"}>
                    <img className={"img-fluid info-logo"} src={logo2} />
                    <h4>kud1001noc@outlook.com</h4>
                </div>
                <div className={"col-4 text-center"}>
                    <img className={"img-fluid info-logo"} src={logo3} />
                    <h4>@kud1001noćFojnica</h4>
                </div>
            </div>
        </div>
    );
}

export default Information;