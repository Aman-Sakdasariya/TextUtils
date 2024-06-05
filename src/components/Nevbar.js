import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Nevbar({ title = "Enter Name here...", aboutText = "Enter about you here", /*this is use for default if u don't want deafault value then just type here props without '{}'*/ mode, toggleMode, changeTheme }) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><i><b>{title}</b></i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">{aboutText}</Link>
                            </li>
                        </ul>
                        <div className={`form-check text-${mode === 'dark' ? 'light' : 'dark'} mx-1`}>
                            <input className="form-check-input" onClick={()=>{changeTheme('dark')}} type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Dark
                                </label>
                        </div>
                        <div className={`form-check color-dark text-${mode === 'dark' ? 'light' : 'dark'} mx-1`}>
                            <input className="form-check-input" onClick={()=>{changeTheme('green')}} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Green Dark
                                </label>
                        </div>
                        <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`} >
                            <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}
Nevbar.propTypes = {
    title: PropTypes.string.isRequired, //is isRequired is use to make sure some value pass id default is available then it take default value
    aboutText: PropTypes.string
}

//  this is old method for set default props
//  Nevbar.defaultProps={
//     title : "Enter Name here...",
//     aboutText : "Enter about you here"
// }