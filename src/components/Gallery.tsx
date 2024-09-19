import React from "react";

export const Gallery = () => {
  const imgStyle = {
    width: "200px",
    height: "auto",
  };

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={{ textAlign: "center" }}>
              <img
                src="src/assets/groin gaurd red_.jpg"
                alt="Groin Guard Red"
                style={imgStyle}
              />
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ textAlign: "center" }}>
              <img
                src="src/assets/groin gaurd_.jpg"
                alt="Groin Guard"
                style={imgStyle}
              />
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ textAlign: "center" }}>
              <img
                src="src/assets/groin no foul back_.jpg"
                alt="Groin No Foul Back"
                style={imgStyle}
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
