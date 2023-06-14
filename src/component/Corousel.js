import React from 'react';

export default function Carousel() {
  return (
    <div className='px-5 my-3 rounded' style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", backfaceVisibility: "20%" }}>
      <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide vh-auto mb-0 rounded" data-bs-ride="carousel" data-bs-interval="5000" style={{ backgroundColor: '#808080' }}>
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
          className="carousel-control-prev container-fluid w-25 ms"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next container-fluid w-25 ms-"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon color-black" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <h6 className='text-center text-white pb-3'>Glimpses Of Group</h6>
      </div>
    </div>
  );
}
