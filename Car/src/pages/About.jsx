import React, { useEffect } from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.avif';
import '../styles/about.css';
import { Container, Row, Col } from 'react-bootstrap';
import man from '../assets/man.png'
import team from '../assets/team.jpg'
import Faq from '../pages/Faq'
import CountUp from 'react-countup';

function About() {
  useEffect(() => {
    animateCounters();
  }, []);
  return (
    <>
      <Container className="about_us">
        <Row className="mb-4">
          <Col md={9}>
            <h1>About Us</h1>
            <p className='about_p'>
              Greetings from JP Corporation, your go-to place for top-notch used car sales and purchases. We work hard to make the car-buying process easy, clear-cut, and joyful because we are passionate about vehicles and dedicated to providing outstanding customer service. <br /><br />
              We at JP Corporation recognize the importance of the decision you make when buying an automobile. To accommodate every lifestyle and price range, we have thus carefully chosen a wide range of well-maintained automobiles. We offer the ideal car to suit your needs, whether you’re looking for a sporty sedan, a sturdy SUV, or a dependable family minivan. <br /><br />
              Our commitment to ethics and openness makes us unique. We are committed to giving our clients all the information they require in order to make wise choices. For this reason, every one of our ads includes comprehensive car histories, complete with odometer readings, accident reports, and service information. Every step of the process, we want you to feel comfortable and confident about your purchase. <br /><br />
              Throughout the purchasing process, our team of knowledgeable automotive specialists is here to help. Our commitment to delivering individualized attention and assistance to guarantee your total satisfaction extends beyond simply helping you select the ideal automobile. <br /><br />
              We appreciate you selecting JP Corporation for all of your car requirements. We are eager to assist you!
            </p>
          </Col>
          <Col md={3}>
            <img className='about_img' src={about1} alt="" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={9}>
            <h2 className='secondheading'>
              Our mission statement
            </h2>
            <p className='about_p'>
              Our goal at JP Corporation is to completely transform the automobile-purchasing process by offering a flawless online environment where openness, confidence, and client happiness are prioritized. We are dedicated to providing a carefully chosen range of excellent used cars that have been thoroughly examined and presented in an open manner, enabling customers to make selections with confidence. <br /><br />
              Motivated by our love of automobiles and commitment to quality, we work hard to always go above and beyond expectations. From perusing our inventory to obtaining financing and beyond, our staff is committed to providing individualized care and assistance to each and every customer.
            </p>
            <h2 className='secondheading'>
              Our vision
            </h2>
            <p className='about_p'>
              Our goal at JP Corporation is to be the go-to place for auto shoppers looking for a simple, clear, and pleasurable online purchasing experience. Our goal is to become the reliable resource that clients turn to when they’re looking for the ideal car, offering them individualized attention, professional advice, and a dedication to quality. <br /><br />
              Our goal at JP Corporation is to transform the overall car-buying process in addition to becoming the go-to place for purchasers. In our ideal future, buying a car is a fun and empowering experience rather than just a transaction.
            </p>
          </Col>
          <Col md={3}>
            <img className='about_img' src={about2} alt="" />
          </Col>
        </Row>

        <div className="counter-section">
          <div className="counter-item">
            <div className="number">
              <CountUp end={15} duration={2.75} />
            </div>
            <div className="label">
              Years in <br /> Business
            </div>
          </div>
          <div className="separator"></div>
          <div className="counter-item">
            <div className="number">
              <CountUp end={158} duration={2.75} />
            </div>
            <div className="label">
              Specialists
            </div>
          </div>
          <div className="counter-item">
            <div className="number">
              <CountUp end={50000} duration={2.75} />
            </div>
            <div className="label">
              Cars sold
            </div>
          </div>
          <div className="counter-item">
            <div className="number">
              <CountUp end={8} duration={2.75} />
            </div>
            <div className="label">
              Localizations
            </div>
          </div>
        </div>

        <Faq />


        <div className="row">
          <div className="abt_cchoose">

            <h1>WHY CHOOSE US</h1>
            <ol>
              <li><strong> High-quality Selection:</strong> Thoroughly tested to guarantee dependability and performance, our carefully chosen inventory offers a wide range of premium pre-owned automobiles. We offer the ideal car to fit your needs, whether you’re looking for a sporty sedan, a tough SUV, or a reasonably priced minivan for the whole family.</li>
              <li><strong>ransparent rates:</strong> We value being truthful and open in all of our business interactions. No hidden costs or unpleasant surprises—just reasonable, competitive, and up-front pricing. For you to feel confident in your decision-making, we offer thorough information and extensive car histories.</li>  <br /> <br />
              <li> <strong>Distinguished Client Care:</strong> We put your pleasure first. Personalized attention and assistance are the hallmarks of our team of automotive professionals at every turn. Our goal is to make the process of purchasing a car easy, stress-free, and joyful for you, from helping you choose the ideal automobile to obtaining finance and beyond.</li>
              <li> <strong>Simple Financing choices:</strong>  We provide flexible financing choices that are suited to your needs since we recognize that purchasing a car may be a complicated process. Our financing professionals will work with you to identify the finest option that works within your budget, regardless of your credit history—good, terrible, or nonexistent.</li>
              <li> <strong>Convenient Online Experience:</strong>  From the comfort of your home, you can explore our inventory, arrange test drives, and make your purchase with our easy-to-use interface. Buying for your next automobile may be done easily, conveniently, and worry-free with our safe online platform.</li>
            </ol>


          </div>
        </div>

        <div className="row">
          <div className="abt_cchoose">

            <h1>How to buy a car; step-by-step guide</h1>
            <p>Convenience, flexibility, and peace of mind are provided by online auto purchases. To get your ideal automobile from  JP Corporation, just follow these easy steps:</p>  <br /> <br />
            <ol>
              <li> <strong>Browse our website:</strong> <br />
                Browse our large selection of pre-owned cars by visiting our website. To focus your choices depending on manufacturer, model, price, and other considerations, use our search filters.</li>
              <li> <strong>Examine the vehicle’s details:</strong> <br />
                To read comprehensive details on a car, including pictures, features, specs, and costs, click on the listing. Take your time weighing your alternatives to choose which automobile best suits your needs.</li>
              <li> <strong> Request Financing:</strong> <br />
                We provide numerous financing solutions to fit your needs and budget. Use our online financing application to quickly and simply become pre-approved. Together, you and our financial experts will choose the ideal financing option for your requirements.</li>
              <li> <strong>Examine Your Buying Options:</strong> <br />
                Discuss your buying possibilities with our sales staff after your test drive. We’ll provide you a thorough explanation of the costs, financing options, and any extra services or guarantees that are offered.</li>
              <li> <strong> Finish off Your Purchase:</strong> <br />
                When you’re prepared to proceed, we’ll walk you through every step of the buying procedure. Sign the required paperwork safely and electronically from the comfort of your own home.</li>
              <li> <strong> Schedule a Pickup or Delivery:</strong>
                Select if you want your car delivered right to your door or picked up from our dealership. We’ll handle logistics to make sure everything goes smoothly and without a hitch.:</li>
              <li> <strong> Enjoy Your New Vehicle:</strong> <br />
                Best wishes! Now that you possess a high-quality used car from  JP Corporation, you may drive with pride. Savor the thrill of driving your new vehicle and the freedom it brings.
              </li>
              <li> <strong> Stay connected with us:</strong> <br />
                Remember to remain in touch with us for any upcoming service requirements, upkeep advice, and exclusive deals. We are available to assist you at every stage of your ownership experience</li> <br /> <br />
              <p>Are you prepared to begin the online car-buying process? Experience the ease of buying a car online with  JP Corporation by browsing our inventory today.</p>
            </ol>
          </div></div>

      </Container>
    </>

  );
}

export default About;
