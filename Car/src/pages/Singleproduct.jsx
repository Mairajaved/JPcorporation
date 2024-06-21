import React, { useState } from 'react';
import Car1 from '../assets/card2.jpeg';
import img1 from '../assets/i,g1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import '../styles/SingleProduct.css';
import { Link } from 'react-router-dom';
import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import card4 from '../assets/card4.jpeg'


function SingleProduct() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Car1, img1, img2, img3, img4];

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className="app-container">
                <nav className="breadcrumb">
                    <span>Homepage</span> - <span>Search</span> - <span>HONDA</span> - <span>HONDA FIT 2018</span>
                </nav>
                <div className="car-container">
                    <div className="image-gallery">
                        <div className="image-container">
                            <img src={images[currentImageIndex]} alt="Main car view" className="main-image" />
                            <button className="prev-arrow" onClick={handlePrevClick}>❮</button>
                            <button className="next-arrow" onClick={handleNextClick}>❯</button>
                        </div>
                        <div className="thumbnail-container">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnail ${index === currentImageIndex ? 'active' : 'inactive'}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="car-details">
                        <h1>HONDA FIT 2018</h1>
                        <div className="car-meta">
                            <span>2018</span> • <span>13,092 miles</span> • <span>Petrol</span>
                        </div>
                        <h2>$4,800</h2>
                        <button className="favorite-btn">☆ Add to favorites</button>
                        <div className="car-specs">
                            <ul>
                                <li><strong>Make:</strong> HONDA</li>
                                <li><strong>Color:</strong> RED</li>
                                <li><strong>Transmission:</strong> Automatic</li>
                                <li><strong>Condition:</strong> New</li>
                                <li><strong>Year:</strong> 2018</li>
                                <li><strong>Mileage:</strong> 13,092 miles</li>
                                <li><strong>Fuel Type:</strong> Petrol</li>
                                <li><strong>Doors:</strong> 4-door</li>
                                <li><strong>Color:</strong> RED</li>
                            </ul>
                        </div>
                        <button className='w-100 text-white sendmessage'>Send message</button>
                        <div className="offer-id">Offer ID #23472</div>
                        <div className="social-buttons">
                            <button className="share-btn">Share</button>
                            <button className="tweet-btn">Tweet</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sendmeasaagae">
                <div className="row">
                    <div className="col-6 mainmsg">
                        <h2>Send message</h2>
                        <input className='msginp' type="text" placeholder="'I'm interested in HONDA CR-V '2018'" />
                        <button className='msgsendbtn text-white justify-content-center'  >Send</button>
                    </div>
                    <div className="col-6 mt-4">
                        <div className="msgcontent">
                            <h3>webadmin</h3>
                            <span>administrator</span>
                        </div>
                        <div className="msgcontent">
                            <p>mutharsoomro13@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row related">
                <h1>Related listings</h1>

                <div className="row cardrow mt-4 w-199 gap-4">

                    <div className="card" style={{ width: "24rem" }}>
                        <img src={card1} alt="..." />
                        <Link to="/single-product">
                            <div className="card-body bg-dark">
                                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                                <h5 className="card-title text-white">$4,800</h5>
                                <p className="card-text gap-3"><hr /></p>
                                <a href="#" className="littlebtn">2018</a>
                                <a href="#" className='text-white m-4'>13,092 miles</a>
                                <a href="#" className='text-white'>Automatic</a>
                            </div>
                        </Link>
                    </div>
                    <div className="card" style={{ width: "24rem" }}>
                        <img src={card1} alt="..." />
                        <Link to="/single-product">
                            <div className="card-body bg-dark">
                                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                                <h5 className="card-title text-white">$4,800</h5>
                                <p className="card-text gap-3"><hr /></p>
                                <a href="#" className="littlebtn">2018</a>
                                <a href="#" className='text-white m-4'>13,092 miles</a>
                                <a href="#" className='text-white'>Automatic</a>
                            </div>
                        </Link>
                    </div>
                    <div className="card" style={{ width: "24rem" }}>
                        <img src={card1} alt="..." />
                        <Link to="/single-product">
                            <div className="card-body bg-dark">
                                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                                <h5 className="card-title text-white">$4,800</h5>
                                <p className="card-text gap-3"><hr /></p>
                                <a href="#" className="littlebtn">2018</a>
                                <a href="#" className='text-white m-4'>13,092 miles</a>
                                <a href="#" className='text-white'>Automatic</a>
                            </div>
                        </Link>
                    </div>
                    <div className="card" style={{ width: "24rem" }}>
                        <img src={card1} alt="..." />
                        <Link to="/single-product">
                            <div className="card-body bg-dark">
                                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                                <h5 className="card-title text-white">$4,800</h5>
                                <p className="card-text gap-3"><hr /></p>
                                <a href="#" className="littlebtn">2018</a>
                                <a href="#" className='text-white m-4'>13,092 miles</a>
                                <a href="#" className='text-white'>Automatic</a>
                            </div>
                        </Link>
                    </div>


                </div>
            </div>
        </>

    );
}

export default SingleProduct;
