import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './Activity-content.css'

// @ts-ignore
import dummy from '../images/dummy-img.jpg'

interface Activity {
    _id: string;
    name: string;
    location: string;
    country: string;
    date: string;
    text: string;
    image1: string;
    image2: string;
}

const ActivityContent = (props: any) => {

    const { activityId } = useParams();
    const [activityData, setActivityData] = useState<Activity>();
    console.log(activityId)

    useEffect(() => {
        fetch(`http://localhost:5000/Activities/${activityId}`)
            .then((res) => res.json())
            .then((data) => setActivityData(data as Activity))
    }, [activityId]);

    console.log(activityData)

    return (
        <div>
            {activityData && (
            <div  key={activityData._id}>
            <div className={"row activity-row1"}>
                <div className={"col-7 activity-box1"}>
                    <h1>{activityData.name}</h1>
                    <br/>
                    <h4>{activityData.country}</h4>
                    <br/>
                    <h4>{activityData.location} </h4>
                    <br/>
                    <h4>{activityData.date}</h4>
                </div>

                <div className={"col-5 activity-box2"}>
                    <div>
                        <img className={"img-fluid img-thumbnail"} src={dummy}/>
                        {/*switch src={dummy} with src={activityData.image1}*/}
                    </div>
                </div>
            </div>
            <div className={"row activity-row2"}>
                <div className={"col-5 activity-box3"}>
                    <div>
                        <img className={"img-fluid img-thumbnail"} src={dummy}/>
                        {/*switch src={dummy} with src={activityData.image2}*/}
                    </div>
                </div>

                <div className={"col-7 activity-box4"}>
                    <p> {activityData.text} </p>
                </div>
            </div>
                </div>
                )}
        </div>
    );
}

export default ActivityContent;