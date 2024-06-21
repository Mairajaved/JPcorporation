import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Hero.css';
import sedan from '../assets/sedan.png';
import suv from '../assets/suv.png';
import couple from '../assets/couple.png';
import cars2 from '../assets/cars2.png';
import hand from '../assets/Untitled-1.png';

function Hero() {
  return (
    <div className="hero p-4">
      <div className="hero-content p-4 d-flex justify-content-center">
        <div className="heading">
          <h1>Find Your <span>Perfect</span> Car</h1>
          <Row className="w-100 d-inline">
            <a href="/" className="link-item">All</a>
            <a href="/" className="link-item">New</a>
            <a href="/" className="link-item">Used</a>
          </Row>
          <div className="container-fluid w-100 mt-5 input_box">
            <Row className="w-100">
              <Col xs={12} md={3} className="mb-2 custom-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    All Makes
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">AUDI</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">HINO </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">HONDA </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">ISUZU </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">LEXUS </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">MAZDA </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">MERCEDEES-BENZ </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">MITSUBISHI </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">NISSAN </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">MAZDA </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">SUBARU </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">SUZUKI </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">TOYOTA </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={12} md={3} className="mb-2 custom-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    All Models
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Model 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Model 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Model 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={12} md={3} className="mb-2 custom-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Max Price
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">$10,000</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">$20,000</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">$30,000</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">$100,000</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">$200,000</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={12} md={3} className="mb-2">
                <Link to="/allcars" >
                  <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
