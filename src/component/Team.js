import React from 'react';

export default function Team() {
  return (
    <div style={{ backgroundColor: "#e3f2fd"}}>
        <div className='container'>
        <h1 className='text-center text-decoration-underline' style={{color: '#ffffff'}}>Group Members</h1>
      <div className='row'>
      <h3 className='text-center py-3 '>Postdoc Researchers</h3>
        <div className='col-md-4'>
          <div className='card' style={{ width: '12rem', }}>
            <img src='cat.png' className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title text-center'>Name</h5>
              <h6 className='card-title text-center'>Designation</h6>
              <div className='text-center'>
                  <a href='#' className='btn btn-dark'>
                    Connect
                  </a>
                </div>
            </div>
          </div>
        </div>
        </div>
      <div className='row'>
      <h3 className='text-center py-3 text-decoration-underline'>PHD students</h3>
        <div className='col-md-4'>
          <div className='card' style={{ width: '12rem', }}>
            <img src='cat.png' className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title text-center'>Name</h5>
              <div className='text-center'>
                  <a href='#' className='btn btn-primary'>
                    Website/Gmail
                  </a>
                </div>
            </div>
          </div>
        </div>
        </div>

      <div className='row'>
      <h3 className='text-center py-3 text-decoration-underline'>Graduate Students</h3>
        <div className='col-md-4'>
          <div className='card' style={{ width: '12rem', }}>
            <img src='cat.png' className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title text-center'>Name</h5>
              <div className='text-center'>
                  <a href='#' className='btn btn-primary'>
                    Website/Gmail
                  </a>
                </div>
            </div>
          </div>
        </div>
        </div>

      <div className='row'>
      <h3 className='text-center py-3 text-decoration-underline'>Undergraduate Students</h3>
        <div className='col-md-4'>
          <div className='card' style={{ width: '12rem', }}>
            <img src='cat.png' className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title text-center'>Name</h5>
              <div className='text-center'>
                  <a href='#' className='btn btn-primary'>
                    Website/Gmail
                  </a>
                </div>
            </div>
          </div>
        </div>
        </div>

        
      <div className='row'>
      <h3 className='text-center py-3 text-decoration-underline'>Alumni </h3>
        <div className='col-md-4'>
          <div className='card' style={{ width: '12rem', }}>
            <img src='cat.png' className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title text-center'>Name</h5>
              <div className='text-center'>
                  <a href='#' className='btn btn-primary'>
                    Website/Gmail
                  </a>
                </div>
            </div>
          </div>
        </div>
        </div>

        </div>

    </div>
  );
}
