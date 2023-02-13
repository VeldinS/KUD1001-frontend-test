import React, {useEffect, useState} from 'react';
import './EditActivity-content.css'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

interface Activity {
    _id: string;
    name: string;
    location: string;
    country: string;
    date: string;
    text: string;
}

const EditActivityContent = (props: any) => {

    const navigate = useNavigate();

    const navigateToControlPanel = () => {
        alert('AKTIVNOST USPJEŠNO AŽURIRANA!')
        navigate('/Admin/Control-panel');
    };

    const { activityId } = useParams();
    const [activityData, setActivityData] = useState({
        _id: '',
        name: '',
        location: '',
        country: '',
        date: '',
        text: '',
    });
    console.log(activityId)


    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        await setActivityData({ ...activityData, [name]: value });
    };

    const handleChangeTextArea = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        await setActivityData({ ...activityData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newActivity = {
            name: activityData.name,
            location: activityData.location,
            country: activityData.country,
            date: activityData.date,
            text: activityData.text,
        }
        console.log(newActivity)
        const response = await axios.patch(`http://localhost:5000/Admin/Control-panel/Activities/Edit/${activityId}`,newActivity, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        alert('AKTIVNOST USPJEŠNO AŽURIRANA!')
        navigate('/Admin/Control-panel');
    };

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
            <form onSubmit={handleSubmit} className={"text-center edit-forma"}>
                <div className="mb-3 edit-forma1">
                    <label htmlFor="exampleInputEmail1" className="form-label">NAZIV AKTIVNOSTI</label>
                    <input defaultValue={activityData.name} name={'name'} onChange={handleChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 edit-forma1">
                    <label htmlFor="exampleInputEmail1" className="form-label">LOKACIJA</label>
                    <input defaultValue={activityData.location} name={'location'} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 edit-forma1">
                    <label htmlFor="exampleInputEmail1" className="form-label">DRŽAVA</label>
                    <input defaultValue={activityData.country} name={'country'} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 edit-forma1">
                    <label htmlFor="exampleInputEmail1" className="form-label">DATUM</label>
                    <input defaultValue={activityData.date} name={'date'} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 edit-forma1">
                    <label htmlFor="exampleInputEmail1" className="form-label">DETALJAN TEKST</label>
                    <textarea defaultValue={activityData.text} name={'text'} onChange={handleChangeTextArea} className="form-control edit-forma2" id="exampleInputPassword1"/>
                </div>
                <div className={"eit-forma3"}>
                    <button  type="submit" className="btn btn-primary form-btn">AŽURIRAJ</button>
                </div>
            </form>
                </div>
            )}
        </div>
    );
}

export default EditActivityContent;