import React, {useState} from 'react';
import Header from "./header/Header";

import './Register.css'
import {useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        date: '',
        email: '',
        number: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Send formData to the backend here

        const newPerson = { ...formData };

        await fetch('http://localhost:5000/Register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson)
        })

        console.log(formData);
        navigate('/Redirect');
    };

    return (
        <>
            <Header/>
            <div className={" position-absolute top-50 start-50 translate-middle card membership-form"}>
            <form onSubmit={handleSubmit} className={"text-center forma"}>
                <div className="mb-3 forma1">
                    <label htmlFor="exampleInputEmail1" className="form-label">Ime</label>
                    <input type="text" name={"name"} value={formData.name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Molimo unesite vaše ime.</div>
                </div>
                <div className="mb-3 forma1">
                    <label htmlFor="exampleInputEmail1" className="form-label">Prezime</label>
                    <input type="text" name={"surname"} value={formData.surname} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Molimo unesite vaše prezime.</div>
                </div>
                <div className="mb-3 forma1">
                    <label htmlFor="exampleInputEmail1" className="form-label">Datum rođenja</label>
                    <input type="text" name={"date"} value={formData.date} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Molimo unesite vaš datum rođenja.</div>
                </div>
                <div className="mb-3 forma1">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email adresa</label>
                    <input type="email" name={"email"} value={formData.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Molimo unesite vašu email adresu preko koje cemo vas kontaktirati.</div>
                </div>
                <div className="mb-3 forma1">
                    <label htmlFor="exampleInputPassword1" className="form-label">Broj telefona</label>
                    <input type="number" name={"number"} value={formData.number} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Molimo unesite vaš broj telefona preko kojeg cemo vas kontaktirati.</div>
                </div>
                <button  type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    );
}

export default Register;