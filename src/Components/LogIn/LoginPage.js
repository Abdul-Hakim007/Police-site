import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-page.css';

const LoginPage = () => {
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newEntry = { id: new Date().getTime().toString(), address, password };
    setAllEntry([...allEntry, newEntry]);
    setAddress("");
    setPassword("");
    console.log(allEntry);
  }
 const navigate = useNavigate();

  return (
    <div>
      <div  className="form-control">
      <form className="form-style" onSubmit={formSubmit}>
        <div>
          <label className="label-1" htmlFor="address">Block Address:</label>
          <input className='input-style' type="text" name="address" id="address" autoComplete='off' value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label className="label-2" htmlFor="password">Password:</label>
          <input className='input-style' type="password" name="password" id="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="button-style" type="submit">LogIn</button>
        <small className="small-style">If you don't have account</small>
        <button className="button-style-1" onClick={()=>{navigate("/signup")}}>Please SignUp</button>
      </form>
      </div>
     
      <div>
        {
          allEntry.map((element) => {
            const { id, address, password } = element;
            return (
              <div key={id}>
                <p>{address}</p>
                <p>{password}</p>
              </div>
            )
          })
        }
      </div>
    </div>

  );
};

export default LoginPage;