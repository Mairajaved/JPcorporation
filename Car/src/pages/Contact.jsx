import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';

function Contact() {
  const formRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setSubmitting(true);

    try {
      const result = await emailjs.sendForm('service_dbz59si', 'template_mtgly41', formRef.current, 'JXmNHX3T8gIQD9h2V');
      console.log('Form submitted successfully:', result.text);
      setShowAlert(true);
      formRef.current.reset();
    } catch (error) {
      console.error('Form submission error:', error.text);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact_us container">
      <div className="row">
        <div className="col-md-6 contact_info">
          <h1>Contact us</h1>
          <h2>Get in touch with us</h2>
          <p>
            We appreciate you showing interest in JP Corporation! If you have any queries, remarks, or worries, we are available to help. We invite you to contact us using the details shown below, and we will be pleased to help you.
          </p>
          <p>
            <strong>Hours of Customer Service:</strong> 9:00 AM to 5:00 PM (EST) Monday through Friday
          </p>
          <p>
            <strong>Details of Contact:</strong>
          </p>
          <p>
            <strong>Phone:</strong> (The number you provided)
          </p>
          <p>
            Kindly provide your email address.
          </p>
          <p>
            Please include your physical address.
          </p>
          <div className="social_links">
            <a href="#" className="fa fa-facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="fa fa-twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="fa fa-youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <form ref={formRef} className="contact_form" onSubmit={handleSubmit} noValidate>
            <div className="row gap-4">
              <input className="inline_inp" type="text" placeholder="Name" name="name" required />
              <input className="inline_inp" type="email" placeholder="Email" name="email" required />
              <input className="inline_inp" type="tel" placeholder="Phone" name="phone" required />
            </div>
            <input className="msg_inp" type="text" placeholder="Message" name="message" required />
            <div className="row align-items-center">
              <label className="checkbox-label">
                <input type="checkbox" name="privacy_policy" id="privacy_policy" required />
                <span className="checkbox-custom"></span>
                Accept the privacy policy
              </label>
              <button type="submit" className='justify-content-center text-white' disabled={submitting}>
                {submitting ? 'Sending...' : 'Send'}
              </button>
            </div>
            {showAlert && <div className="alert-message">Thank you for your message!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
