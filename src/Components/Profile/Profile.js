import React from 'react';
import Card from 'react-bootstrap/Card';
import police from '../../images/policewalihlw.jpg';
import { useNavigate } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
    const navigateToRequest = useNavigate();
    return (
        <div className="profile_card">
            <div>
                <Card className="card_control">
                    <Card.Img className="image_control" variant="top" src={police} />
                    <Card.Body>
                        <Card.Title>
                            <small className="set_width">Address: 0xF66943BEe6f500395fD46FcB9A822b2e23B23cdd</small>
                        </Card.Title>
                        <Card.Text>
                            <p>Email: youremail@gmail.com </p>
                            <p>Position: Officer</p>
                            <p>Station: Dhaka </p>
                        </Card.Text>
                        <button onClick={() => { navigateToRequest("/request") }} className="request_btn">Request for case information</button>
                    </Card.Body>
                </Card>
            </div>
            <div className="reply_from_admin">
                <h6 className="admin">Reply From Admin</h6>
                <h6 className="case_one">Case No: 42</h6>
                <p className="case_one">Info: Thanks for your inquery. The important topic has send to your mail. So, Please collect the imformation. And start your work. Best of luck</p>
            </div>
        </div>
    );
};

export default Profile;