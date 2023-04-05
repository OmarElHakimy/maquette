import React from 'react';
import './input.css'

const Input = () => {

    return (
            <div className='input-group border-0 text-dark text-secondary inputWidth mx-auto m-lg-0'>
                <div className="form-floating">
                    <input type="email" class="form-control text-dark border-0 rounded-pill input inputWidth fontTwo" id="emailLabel" placeholder="email" aria-describedby="talk"/>
                    <label forhtml="emailLabel" className=' text-secondary fontTwo'><i className='bi bi-envelope-fill'> </i>Enter Your Email Adress</label>
                </div>
                <button className="btn btn-warning rounded-pill fontThree py-2" type="button" id="talk">Let's Talk</button>
            </div>
    )
}
export default Input