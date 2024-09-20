import React from "react";
import "./Home.css";

export const Home = () => {
  const topImage = {};

  return (
    <>
      <div className="image">
        <div className="Text-container">
          <h1>Welcome to MailSail</h1>
        </div>
      </div>
      <div className="welcome-para-container">
        <div className="welcome-img-container">
          <img src="./src/assets/kitchen.jpg" alt="kitchen" />
          <img src="./src/assets/kitchen2.jpg" alt="kitchen" />
        </div>
        <div className="para-container">
          <p>
            Welcome to SailMail, your ultimate destination for all things
            nautical! Whether you're a seasoned sailor or just starting your
            journey on the water, SailMail is here to provide you with
            everything you need to navigate with confidence and style. We offer
            a wide range of top-quality products, from sailing gear to essential
            accessories, ensuring that you have the best equipment at your
            fingertips.
            <br />
          </p>
          <hr className="solid" />
          <a href="./About" className="about-link">
            <span>
              <u>About Us</u>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
