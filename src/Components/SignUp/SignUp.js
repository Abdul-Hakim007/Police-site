import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const navigateToLogin = useNavigate();  
    return (
        <div className="singUp">
            <div className="d-flex justify-content-center align-items-center bg-controller">
                <form className="form-controller-2">
                    <div>
                        <label className="lable_style" htmlFor="address">Block Address:</label>
                        <input className="label_last" type="text" name="address" id="address" autoComplete='off' required />
                    </div>
                    <div>
                        <label className="lable_style" htmlFor="name">Name:</label>
                        <input className="label_last label_name" type="text" name="name" id="name" autoComplete='off' required />
                    </div>
                    
                    <div>
                        <label className="lable_style" htmlFor="email">Email:</label>
                        <input className="label-one" type="text" name="email" id="email" autoComplete='off' required />
                    </div>
                    <div>
                        <label className="lable_style" htmlFor="password">Password:</label>
                        <input className="label-two" type="password" name="password" id="password" autoComplete='off' required />
                    </div>
                    <div>
                        <label className="lable_style" htmlFor="postion">Position:</label>
                        <select className="option" id="position">
                            <option value="Admin">Select Position</option>
                            {/* <option value="Admin">Admin</option> */}
                            <option value="Officer">Officer</option>
                        </select>
                    </div>
                    <div>
                        <label className="lable_style" htmlFor="postion">Station:</label>
                        <input className="station_style" type="postion" name="position" id="position" autoComplete='off' required />
                    </div>
                   
                    <button className="button_style" type="submit">Sign Up</button>
                    <br/>
                    <small className="p_style">If you have a account</small>
                    <div>
                    <button className="signUp_style" onClick={()=>{navigateToLogin("/login")}} >Please LogIn</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default SignUp;