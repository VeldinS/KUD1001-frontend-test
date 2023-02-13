import React from 'react';
import Header from "./header/Header";
import './DeleteActivity.css'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const DeleteActivity = () => {

    const navigate = useNavigate();
    const { activityId } = useParams();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await axios.delete(`http://localhost:5000/Admin/Control-panel/Activities/Delete/${activityId}`);
        alert('AKTIVNOST USPJEŠNO IZBRISANA!')
        navigate('/Admin/Control-panel/Activities/Select');
    };


    return (
        <div>
            <Header/>
            <div className={" position-absolute top-50 start-50 translate-middle card"}>
                <form onSubmit={handleSubmit} className={"text-center forma"}>
                    <h4 className={"delete-header"}>Da li ste sigurni da želite obrisati ovu aktivnost?</h4>
                    <button type="submit" className="btn btn-primary">OBRIŠI</button>
                </form>
            </div>
        </div>
    );
}


export default DeleteActivity;