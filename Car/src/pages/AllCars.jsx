import React from 'react';
import img1 from '../assets/card2.jpeg';
import '../styles/Allcar.css'

function AllCars() {
    return (
        <>
            <div className="container">
                <div className="row new-all-cars">
                    <h1 className="col-12 new-results-title">Results</h1>
                    <div className="col-12 new-fluu-container">
                        <div className="col-md-3 col-12 new-img-container">
                            <img src={img1} alt="Car" className="img-fluid" />
                        </div>
                        <div className="col-md-9 col-12 new-content-container">
                            <h2>TOYOTA HIACE VAN</h2>
                            <p>$6,900</p>
                            <div className="row d-flex justify-content-between mt-4">
                                <div className="col-6 d-flex flex-wrap new-car-details">
                                    <button className="btn mx-2">2016</button>
                                    <p className="mb-0 mx-2">153,300 miles</p>
                                    <p className="mb-0 mx-2"><span>Diesel</span></p>
                                    <p className="mb-0 mx-2">4WD</p>
                                </div>
                                <div className="col-6 d-flex justify-content-end new-price">
                                    <h3>$6,900</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Repeat the structure for other car items */}
                <div className="row new-all-cars">
                    <div className="col-12 new-fluu-container">
                        <div className="col-md-3 col-12 new-img-container">
                            <img src={img1} alt="Car" className="img-fluid" />
                        </div>
                        <div className="col-md-9 col-12 new-content-container">
                            <h2>TOYOTA HIACE VAN</h2>
                            <p>$6,900</p>
                            <div className="row d-flex justify-content-between mt-4">
                                <div className="col-6 d-flex flex-wrap new-car-details">
                                    <button className="btn mx-2">2016</button>
                                    <p className="mb-0 mx-2">153,300 miles</p>
                                    <p className="mb-0 mx-2"><span>Diesel</span></p>
                                    <p className="mb-0 mx-2">4WD</p>
                                </div>
                                <div className="col-6 d-flex justify-content-end new-price">
                                    <h3>$6,900</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default AllCars;
