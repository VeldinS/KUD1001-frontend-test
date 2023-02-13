import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import dummy from '../images/dummy-img.jpg'
import './Activities-content.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';

interface Activity {
    _id: string;
    name: string;
    location: string;
    country: string;
    date: string;
    image1: string;
}

const ActivitiesContent = () => {

    const [activityData, setActivityData] = useState<Activity[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/Activities/All")
            .then((res) => res.json())
            .then((data) => setActivityData(data as Activity[]))
    }, []);

    console.log(activityData)

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToSpecificActivity = () => {
        navigate('/Activities/ActivityID');
    };

    return (
        <div className={"row activities-row1"}>
            {activityData.map((activity) => (
                <div  className={"col-4 activity"} key={activity._id}>
                    <div>
                        <div className="card card1">
                            <img src={dummy} className="card-img-top" alt="..."/>
                            {/*switch src={dummy} with src={activity.image1}*/}
                            <div className="card-body">
                                <h5  className="card-title">{activity.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li  className="list-group-item card2">{activity.location}</li>
                                <li  className="list-group-item card2">{activity.country}</li>
                                <li  className="list-group-item card2">{activity.date}</li>
                            </ul>
                            <div className="card-body text-center">
                                <Link to={`/Activities/${activity._id}`}>
                                <button  type="button" className="btn btn-outline-secondary">Otvori aktivnost</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default ActivitiesContent;