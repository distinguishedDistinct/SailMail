import React, { useState } from "react";

const About = () => {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "0px",
  });

  const [isOpen, setIsOpen] = useState({
    item1: true,
    item2: false,
    item3: false,
  });

  const handleDarkMode = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "2px solid white",
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "0px",
      });
    }
  };

  // Define the type of item as a union of possible keys
  const toggleAccordion = (item: "item1" | "item2" | "item3") => {
    setIsOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item], // Toggle the value of the clicked item
    }));
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-5">About Us</h1>

        <div className="accordion" id="accordionExample" style={myStyle}>
          {/* Accordion Item #1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                onClick={() => toggleAccordion("item1")}
                style={myStyle}
              >
                Accordion Item #1
              </button>
            </h2>
            {isOpen.item1 && (
              <div className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions.
                </div>
              </div>
            )}
          </div>

          {/* Accordion Item #2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                onClick={() => toggleAccordion("item2")}
                style={myStyle}
              >
                Accordion Item #2
              </button>
            </h2>
            {isOpen.item2 && (
              <div className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance.
                </div>
              </div>
            )}
          </div>

          {/* Accordion Item #3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                onClick={() => toggleAccordion("item3")}
                style={myStyle}
              >
                Accordion Item #3
              </button>
            </h2>
            {isOpen.item3 && (
              <div className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element.
                </div>
              </div>
            )}
          </div>
        </div>

        <button className="btn btn-primary my-5" onClick={handleDarkMode}>
          Enable dark mode
        </button>
      </div>
    </>
  );
};

export default About;
