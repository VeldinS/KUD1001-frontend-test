import React, {useContext, useState} from 'react';
import Header from "./header/Header";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../authentication/auth-context";

const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Send formData to the backend here

        const adminCredentials = { ...formData };
        try{
        const res = await fetch('http://localhost:5000/Login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adminCredentials)
        })
        if(res.status === 200) {
            auth.login();
            navigate('/Admin/Control-panel');
        }else{
            alert('POGREŠNO KORISNIČKO IME ILI LOZINKA');
        }

        }catch (err){
            console.log('invalid credentials')
        }
    };

    return (
        <div>
            <Header/>
            <div className={" position-absolute top-50 start-50 translate-middle card membership-form"}>
                <form onSubmit={handleSubmit} className={"text-center forma"}>
                    <div className="mb-3 forma1">
                        <label htmlFor="exampleInputEmail1" className="form-label">USERNAME:</label>
                        <input type="text" name={"username"} value={formData.username} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Molimo unesite vaše korisničko ime.</div>
                    </div>
                    <div className="mb-3 forma1">
                        <label htmlFor="exampleInputEmail1" className="form-label">PASSWORD:</label>
                        <input type="password" name={"password"} value={formData.password} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                        <div id="emailHelp" className="form-text">Molimo unesite vašu lozinku.</div>
                    </div>

                    <button type="submit" className="btn btn-primary">LOGIN</button>
                </form>
            </div>
        </div>
    );
}


export default Login;