import React from 'react';
import { Link } from 'react-router-dom';
import './team.css';

export default function Team() {
  return (
    <div style={{ backgroundColor: '#fffff' }}>
      <div className="container">
        <h2 className="text-center text-decoration-underline my-5" style={{ color: '#3cb043', fontFamily: 'Pacifico' }}>
          Group
        </h2>

        <div className="row row-gap-5">

          <div className="col-md-4">
            <div className='hovered'>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <div className="container text-underline-opacity-0">
                  <div className="card h-100" style={{ width: '13rem', backgroundColor: 'rgb(80, 107, 142,0.9)', position: 'relative', zIndex: '1' }}>
                    <img src="../Team/Prof.jpeg" className="card-img-top team-image" alt="..." style={{ position: 'relative' }} />
                    <div className="card-body text-white">
                      <h5 className="card-title text-center">Dr. Linjiang Chen</h5>
                      <h6 className="card-title text-center">Professor</h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100" style={{ width: '13rem', backgroundColor: 'rgb(80, 107, 142,0.9)', position: 'relative', }}>
              <img src="../Team/Harry_Tyrrell.jpg" className="card-img-top team-image" alt="..." style={{ position: 'relative' }} />
              <div className="card-body text-white">
                <h5 className="card-title text-center">Harry Tyrrell</h5>
                <h6 className="card-title text-center">PHD Student</h6>
              </div>
            </div>
          </div>

          

          <div className="col-md-4">
            <div className="card h-100" style={{ width: '13rem', backgroundColor: 'rgb(80, 107, 142,0.9)', position: 'relative', zIndex: '6' }}>
              <img src="../Team/Chenxi_Sheng.jpeg" className="card-img-top team-image" alt="..." style={{ position: 'relative', zIndex: '7' }} />
              <div className="card-body text-white">
                <h5 className="card-title text-center">Chenxi Sheng</h5>
                <h6 className="card-title text-center">PHD Student</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4 ps-4">
            <div className="card h-100" style={{ width: '13rem', backgroundColor: 'rgb(80, 107, 142,0.9)', position: 'relative', zIndex: '3' }}>
              <img src="../Team/Muyu_Lu_Visiting-Student.jpg" className="card-img-top team-image" alt="..." style={{ position: 'relative', zIndex: '4' }} />
              <div className="card-body text-white">
                <h5 className="card-title text-center">Muyu Lu</h5>
                <h6 className="card-title text-center">Visiting Student</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100" style={{ width: '13rem', backgroundColor: 'rgb(80, 107, 142,0.9)', position: 'relative', zIndex: '5' }}>
              <img src="../Team/Ted_Pitman_MSc-Student.jpg" className="card-img-top team-image" alt="..." style={{ position: 'relative', zIndex: '6' }} />
              <div className="card-body text-white">
                <h5 className="card-title text-center">Ted Pitman</h5>
                <h6 className="card-title text-center">Msc Student</h6>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card h-100" style={{ width: '13rem', backgroundColor: 'rgb(80, 107, 142,0.9)', position: 'relative', zIndex: '4' }}>
              <img src="../Team/ananya.jpeg" className="card-img-top team-image" alt="..." style={{ position: 'relative', zIndex: '5' }} />
              <div className="card-body text-white">
                <h5 className="card-title text-center">Ananya Mathur</h5>
                <h6 className="card-title text-center">Research Intern</h6>
              </div>
            </div>
          </div>


          <div className="col-md-4 ps-4">
            <div className="card h-100" style={{ width: '13rem', backgroundColor: 'rgb(80, 107, 142,0.9)', position: 'relative', zIndex: '4' }}>
              <img src="../Team/Self.jpeg" className="card-img-top team-image" alt="..." style={{ position: 'relative', zIndex: '5' }} />
              <div className="card-body text-white">
                <h5 className="card-title text-center">Sandeep</h5>
                <h6 className="card-title text-center">Research Intern</h6>
              </div>
            </div>
          </div>

          

          

        </div>
      </div>
    </div>
  );
}
