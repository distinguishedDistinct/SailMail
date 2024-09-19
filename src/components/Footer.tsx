import React, { useEffect, useState } from "react";
import "./footer.css";
import Modal from "./Modal";

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    // Toggle the modal state
    setShowModal(!showModal);
  };

  return (
    <>
      <footer className="bg-light text-white">
        <div className="footer-container">
          <div className="info-container">
            <div className="image-item">
              <p>
                <img src="img/maps-and-flags.png" alt="" /> Street N7, Plot 10,
                RCCI Rawat Islamabad
              </p>
            </div>

            <div className="image-item">
              <p>
                <img src="img/telephone.png" alt="" />
                +92 51 4499 006
              </p>
            </div>

            <div className="image-item">
              <p>
                <img src="img/whatsapp.png" alt="" />
                +92 336 7575 502
              </p>
            </div>

            <div className="image-item">
              <a href="mailto: info@kkwoodtech.com">
                <img src="img/email.png" alt="" />
                info@kkwoodtech.com
              </a>
            </div>
          </div>

          <div className="email-container">
            <p>Join our mailing list</p>
            <form method="post" action="process_email.php">
              <label htmlFor="email">Email:</label>
              <input type="email" required />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>

        <div className="admin-container p-1">
          Copyright 2024 © KK Woodtech
          <button className="admin-btn" onClick={handleModal}></button>
        </div>
      </footer>

      {/* Conditionally render the Modal */}
      {showModal && <Modal heading="Sign in" />}
      {showModal && <div className="overlay" onClick={handleModal}></div>}
    </>
  );
};

export default Footer;
