import React, { useState} from 'react';
import './AddActivity-content.css'
import axios from "axios";

const AddActivityContent = () => {

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        country: '',
        date: '',
        text: '',
        image1: '',
        image2: ''
    });

    const [image1Path, setImage1Path] = useState('');
    const [image2Path, setImage2Path] = useState('');

    const handleImageChange = (e:any) => {
        setImage1Path(e.target.files[0].name);
        setImage2Path(e.target.files[1].name);
        console.log(e.target.files)
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newActivity = {
            name: formData.name,
            location: formData.location,
            country: formData.country,
            date: formData.date,
            text: formData.text,
            image1: image1Path,
            image2: image2Path

        }
        const response = await axios.post('http://localhost:5000/Admin/Control-panel/Activities/Add',newActivity, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        //console.log(response.data)
        console.log(newActivity)
        //console.log(fd)

    };

    return (
        <div>
            <div className={"row"}>
                <div className={"col-6"}>
                    <form onSubmit={handleSubmit} className={"text-center forma"}>
                        <div className="mb-3 forma1">
                            <label htmlFor="exampleInputEmail1" className="form-label">NAZIV AKTIVNOSTI</label>
                            <input type="text" name={'name'} value={formData.name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 forma1">
                            <label htmlFor="exampleInputEmail1" className="form-label">LOKACIJA</label>
                            <input type="text" name={'location'} value={formData.location} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 forma1">
                            <label htmlFor="exampleInputEmail1" className="form-label">DRŽAVA</label>
                            <input type="text" name={'country'} value={formData.country} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 forma1">
                            <label htmlFor="exampleInputEmail1" className="form-label">DATUM</label>
                            <input type="text" name={'date'} value={formData.date} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 forma1">
                            <label htmlFor="exampleInputEmail1" className="form-label">DETALJAN TEKST</label>
                            <input type="text" name={'text'} value={formData.text} onChange={handleChange} className="form-control forma2" id="exampleInputPassword1"/>
                        </div>
                    </form>
                </div>
                <div className={"col-6"}>
                    <form onSubmit={handleSubmit} >
                        <div className={"forma3"}>
                            <p>ODABERITE 2 FOTOGRAFIJE ZA VAŠU NOVU AKTIVNOST!</p>
                            <input name={'image'} type={"file"} accept={".jpeg, .png, .jpg"} multiple onChange={handleImageChange}/>
                        </div>
                        <div className={"forma3"}>
                            <button  type="submit" className="btn btn-primary form-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddActivityContent;