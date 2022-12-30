import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/policelogo-removebg-preview.png'
import './NavBar.css';
const NavBar = () => {
    return (
        <div>
           
            <nav>
            <img className="img_style" src={logo} alt=""/>
                <NavLink className="nav-link" to="home">Home</NavLink>
                <NavLink className="nav-link" to="signup">SignUp</NavLink>
                <NavLink className="nav-link" to="login">LogIn</NavLink>
                <NavLink className="nav-link" to="profile">Profile</NavLink>
                <NavLink className="nav-link" to="request">Request</NavLink>
                <NavLink className="nav-link" to="dashboard">Dashboard</NavLink>               
            </nav>
       
        </div>

    );
};

export default NavBar;