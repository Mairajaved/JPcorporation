import React from 'react';
import '../styles/Nav.css';
import heroImg from '../assets/jplogo.png';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavigationBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justifycontent-cente align-items-centerr">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img width={'40px'} height={'40px'} src={heroImg} alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-user-friends fa-2x"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/faq">
                                    FAQ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="form-container">
                            <form className="d-flex" role="search">
                                <Link className="nav-link active" to="/allcarx">
                                    <button className="navbtn ml-3"> Add Listing</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;
