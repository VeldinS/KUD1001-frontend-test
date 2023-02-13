import React, {useEffect, useState} from 'react';
import axios from "axios";

interface Member {
    _id: string;
    name: string;
    surname: string;
    date: string;
    email: string;
    number: number;
}
const NewApplications = () => {

    const [memberData, setMemberData] = useState<Member[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/Admin/Control-panel/Memberships")
            .then((res) => res.json())
            .then((data) => setMemberData(data as Member[]))
    }, []);

    console.log(memberData)

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, activityId:string) => {
        event.preventDefault();

        const response = await axios.delete(`http://localhost:5000/Admin/Control-panel/Membership/Delete/${activityId}`);
        const newData = memberData.filter((member) => member._id !== activityId);
        setMemberData(newData);
        alert('PRIJAVA USPJEŠNO ODOBRENA!');

    };


    return (
        <div>
            <div className={"row activities-row1"}>
                {memberData.map((member) => (
                    <div  className={"col-4 activity"} key={member._id}>
                    <div className="card card1">
                        <div className="card-body">
                            <h5 className="card-title">{member.name}  {member.surname}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item card2">Datum rođenja: {member.date}</li>
                            <li className="list-group-item card2">{member.email}</li>
                            <li className="list-group-item card2">{member.number}</li>
                        </ul>
                        <div className="card-body text-center">
                            <button onClick={(event) => handleSubmit(event, member._id)} type="button" className="btn btn-outline-secondary">Odobri zahtjev</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default NewApplications;