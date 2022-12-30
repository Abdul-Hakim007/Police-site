import React from 'react';
import'./request.css';

const Request = () => {
    return (
        <div>
            <div className="form-center">
                <form  className="form-controlling">
                    <div>
                        <label className="label" htmlFor="address">Block Address:</label>
                        <input className="input_style_first" type="text" name="address" id="address" autoComplete='off' required />
                    </div>
                    <div>
                        <label className="label" htmlFor="police_station">Police Station:</label>
                        <input className="input_style_one" type="police_station" name="police_station" id="police_station" autoComplete='off' required />
                    </div>
                    <div>
                        <label className="label" htmlFor="case_no">Case No:</label>
                        <input className="input_style_two" type="case_no" name="case_no" id="case_no" autoComplete='off' required />
                    </div>
                    <div>
                        <label className="label" htmlFor="case-information">Case <br/>
                        Information:</label>
                        <textarea  className="area_style"/>
                    </div>
                    <button className="btn_style" type="submit">Send Request</button>

                </form>
            </div>
        </div>
    );
};

export default Request;