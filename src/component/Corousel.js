import React from 'react';

export default function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="carousel-inner py-3">
        <div className="carousel-item active">
          <img src="chem.avif" className="d-block mx-auto" alt="..." style={{ width: '30vw' }} />
        </div>
        <div className="carousel-item">
          <img src="chem.avif" className="d-block mx-auto" alt="..." style={{ width: '30vw' }} />
        </div>
        <div className="carousel-item">
          <img src="chem.avif" className="d-block mx-auto" alt="..." style={{ width: '30vw' }} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon color-black" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
