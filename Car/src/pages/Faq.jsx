import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/faq.css';
import { Link } from 'react-router-dom';

function Faq() {
  return (
    <div className="faq">
      <Container className="faq_main">
        <h1>Frequently Asked Questions</h1>
        <div className="faq_body mt-4">
          <div className="row">
            <div className="col-6">
              <div className="accordion" id="accordionExample1">
                <div className="accordion-item m-4">
                  <h2 className="accordion-header" id="headingOne1">
                    <button
                      className="accordion-button collapsed p-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne1"
                      aria-expanded="true"
                      aria-controls="collapseOne1"
                    >
                      Is it possible to book a test drive online?
                    </button>
                  </h2>
                  <div
                    id="collapseOne1"
                    className="accordion-collapse collapse p-4"
                    aria-labelledby="headingOne1"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      Yes, you may easily use our website to book a test drive online. Just select the “Schedule Test Drive” option after seeing the car listing that interests you. After completing the necessary fields, a member of our staff will be in touch to confirm the appointment.
                    </div>
                  </div>
                </div>
                <div className="accordion-item m-4">
                  <h2 className="accordion-header" id="headingTwo1">
                    <button
                      className="accordion-button collapsed p-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo1"
                      aria-expanded="true"
                      aria-controls="collapseTwo1"
                    >
                      Are there any financing alternatives available?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo1"
                    className="accordion-collapse collapse p-4"
                    aria-labelledby="headingTwo1"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      Absolutely, we provide numerous financing alternatives to meet your requirements and budget. You may simply and quickly become pre-approved with the aid of our financial consultants, who can also help you investigate different financing options.
                    </div>
                  </div>
                </div>
                <div className="accordion-item m-4">
                  <h2 className="accordion-header" id="headingThree1">
                    <button
                      className="accordion-button collapsed p-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree1"
                      aria-expanded="true"
                      aria-controls="collapseThree1"
                    >
                      Does the purchase of a car come with a warranty?
                    </button>
                  </h2>
                  <div
                    id="collapseThree1"
                    className="accordion-collapse collapsed p-4"
                    aria-labelledby="headingThree1"
                    data-bs-parent="#accordionExample1 "
                  >
                    <div className="accordion-body">
                      A warranty is offered with many of our cars, however the exact coverage varies based on the car and its age. You may get comprehensive information from our sales staff on the warranty options available for the car of your choice.
                    </div>
                  </div>
                </div>
                <div className="accordion-item m-4">
                  <h2 className="accordion-header" id="headingFour1">
                    <button
                      className="accordion-button collapsed p-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour1"
                      aria-expanded="true"
                      aria-controls="collapseFour1"
                    >
                      Can I trade in the car I currently own?
                    </button>
                  </h2>
                  <div
                    id="collapseFour1"
                    className="accordion-collapse collapse p-4"
                    aria-labelledby="headingFour1"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      Indeed, trade-ins are accepted! We streamline the procedure and provide competitive trade-in prices. Just provide us some information about your existing car, and our staff will determine its worth and get back to you with an offer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="accordion" id="accordionExample2">
                <div className="accordion-item m-4">
                  <h2 className="accordion-header" id="headingOne2">
                    <button
                      className="accordion-button collapsed p-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne2"
                      aria-expanded="true"
                      aria-controls="collapseOne2"
                    >
                      How can I find out whether a car is still for sale?
                    </button>
                  </h2>
                  <div
                    id="collapseOne2"
                    className="accordion-collapse collapse p-4"
                    aria-labelledby="headingOne2"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      We update our website in real time with the most recent inventory status. An automobile is for sale if it is listed on our website. However, in order to verify availability and arrange a test drive, we advise getting in touch with us directly.
                    </div>
                  </div>
                </div>
                <div className="accordion-item m-4">
                  <h2 className="accordion-header" id="headingTwo2">
                    <button
                      className="accordion-button collapsed p-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo2"
                      aria-expanded="true"
                      aria-controls="collapseTwo2"
                    >
                      Is it possible to buy a car totally online?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo2"
                    className="accordion-collapse collapse p-4"
                    aria-labelledby="headingTwo2"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      Yes, you may shop for a car online and finish the procedure all from the convenience of your home. You may apply for financing, look through inventory, and even electronically sign the required paperwork using our website.
                    </div>
                  </div>
                </div>
                <div className="accordion-item m-4">
                  <h2 className="accordion-header" id="headingThree2">
                    <button
                      className="accordion-button collapsed p-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree2"
                      aria-expanded="true"
                      aria-controls="collapseThree2"
                    >
                      Are there any delivery choices available?
                    </button>
                  </h2>
                  <div
                    id="collapseThree2"
                    className="accordion-collapse collapsed p-4"
                    aria-labelledby="headingThree2"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      Yes, for your convenience, we provide delivery choices. Select if you want your car delivered right to your door or picked up from our dealership. Our group will handle logistics to guarantee a seamless and punctual delivery.
                    </div>
                  </div>
                </div>
                <div className="accordion-item m-4">
                  <h2 className="accordion-header" id="headingFour2">
                    <button
                      className="accordion-button collapsed p-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour2"
                      aria-expanded="true"
                      aria-controls="collapseFour2"
                    >
                      What should I do if my query isn't addressed here?
                    </button>
                  </h2>
                  <div
                    id="collapseFour2"
                    className="accordion-collapse collapse p-4"
                    aria-labelledby="headingFour2"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      Do not hesitate to contact us if you have any questions that are not answered in our FAQ area! Our amiable and competent staff is here to help you with any questions you may have.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/about">
          <div className="row d-flex justify-content-center align-items-center">

            <button className="faq-button w-25 justify-content-center">Learn More</button>

          </div>
        </Link>
      </Container>
    </div>
  );
}

export default Faq;
