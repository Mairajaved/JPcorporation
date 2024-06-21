import React from 'react';
import jpimg from '../assets/jplogo.png';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Site footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row m-4">
            <div className="col-sm-12 col-md-6 footer-container">
              <img src={jpimg} alt="logo" />
              <ul className="footer-links">
                {/* <li>Listings</li> */}
                <Link to="/faq"> <li>FAQ</li></Link>
                <Link to="/contact" >   <li>Contact</li></Link>
              </ul>
              <ul className="footer-links">
                <Link to="/about">   <li>About us</li></Link>
                <Link to="/"> <li>Details</li></Link>

              </ul>
            </div>
            <div className="col-xs-6 col-md-3"></div>
            <div className="col-xs-6 col-md-3"></div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright Jpcorporation © 2024. All rights reserved.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <Link className="facebook" to="#">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link className="twitter" to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link className="instagram" to="#">
                    <i className="fa fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
