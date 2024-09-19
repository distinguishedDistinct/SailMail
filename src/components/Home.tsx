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
          <img src="./src/components/kitchen.jpg" alt="kitchen" />
          <img src="./src/components/kitchen2.jpg" alt="kitchen" />
        </div>
        <div className="para-container">
          <p>
            Top-tier kitchen, wardrobe, and door premiere manufacturer in
            Pakistan, rising for two decades in the Middle East. Committed to
            uncompromising quality and bespoke craftsmanship.
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
