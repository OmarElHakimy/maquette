import React from "react";
import {NavLink} from 'react-router-dom'
import Nav from "../components/navigation/Nav";
import logo from '../assets/images/logo.png';

const Navigation = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-lg py-4" style={{backgroundColor: "#111111"}}>
            <div className="container">
                <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="eight_id"/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Nav" aria-controls="Nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="Nav">
                    <Nav/>
                    <a className="btn btn-outline-light rounded-0 fontThree px-4">Contact Now</a>
                </div>
            </div>
        </nav>
    )
}
export default Navigation;