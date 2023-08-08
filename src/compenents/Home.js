import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './assets/Home.css';

const Home = () => {
  return (
    <div className="home-container">

      <div className="hero-container">
        <h1 className="hero-title">Welcome to Tennessee Heat!</h1>
        {/* <p className="hero-subtitle">Tennessee's premiere youth sports basketball organization</p> */}
      </div>

            <div className="home-content">
        <div className="box-wrapper">
          <div className="box">
            <p>
              Tennessee Heat is a premier youth basketball organization located in Nashville. Our mission is to provide a positive and competitive environment for young athletes to develop their basketball skills and foster a love for the game.
            </p>
            <p>
              We are dedicated to helping our players reach their full potential both on and off the court. Through our experienced coaches and rigorous training programs, we aim to instill discipline, teamwork, and a strong work ethic in every player.
            </p>
            <p>
              Our facility is conveniently located at 123 Main Street, Nashville, TN 12345. We offer state-of-the-art basketball courts, top-notch equipment, and a supportive community for athletes of all skill levels. Whether you're just starting out or looking to take your game to the next level, Tennessee Heat is the place for you.
            </p>
            <p>
              Join us today and experience the thrill of playing basketball with Tennessee Heat. We offer year-round programs, including team practices, individual coaching, and participation in local and regional tournaments. Come be a part of our winning tradition and become the best player you can be!
            </p>
          </div>
        </div>
      </div>
      <div className="slideshow-container">
        <Carousel>
          <div>
            <img src="/tnheatslide1.jpg" alt="team1" />
            {/* <p className="legend">Championship Team</p> */}
          </div>
          <div>
            <img src="/tnheatslide2.jpg" alt="Slideshow2" />
            {/* <p className="legend">The GOAT big 3</p> */}
          </div>
          <div>
            <img src="/tnheatslide3.jpg" alt="Slideshow3" />
            {/* <p className="legend">Hype!</p> */}
          </div>
          <div>
            <img src="/tnheatmotto.jpg" alt="Slideshow4" />
            {/* <p className="legend">Championship Team</p> */}
          </div>
          <div>
            <img src="/tnheatKobeQuote.jpg" alt="Slideshow5" />
            {/* <p className="legend">Alternate Jerseys</p> */}
          </div>
          {/* <div>
            <img src="/Heat5.jpg" alt="Slideshow2" />
            <p className="legend">In Jimmy we Trust</p>
          </div> */}
          {/* Add more images here */}
        </Carousel>
      </div>
      <div className="info-box">
        <img src="/tnheatlogo.jpg" alt="Tennessee Heat Logo" className="info-logo" />
        <h4 className="info-title">Our Mission Statement</h4>
        <p>
          "Our mission is to provide a positive and competitive environment for young athletes to develop their basketball skills and foster a love for the game."
        </p>
      </div>
    </div>
  );
};

export default Home;
