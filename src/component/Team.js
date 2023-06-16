import React from 'react';
import { Link } from 'react-router-dom';
import "./team.css"
export default function Team() {
  return (
    <div style={{ backgroundColor: "#fffff"}}>
      <h1 className='text-center text-decoration-underline' style={{color: '#3cb043',fontFamily:"Pacifico"}}>Professor</h1>
      <Link className="nav-link mx-4 text-white"  to={"/about"}>
          <div className='container' style={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className='hovered'>
      <div className=' px-5 my-3 rounded' style={{backgroundColor: "rgb(80, 107, 142,0.9)",  }}>
      <div className='py-5' style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ border: '2px solid #823a46', borderRadius: '50%', padding: '5px' }}>
          <img src="Prof.jpeg" alt="Profile" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', alignSelf: "center" }} />
        </div>
        <div className='container px-5'>
          <h3 className='fw-bolder fs-1  px-5' style={{ color: '#4d004d', textDecorationOffset: '0.3em',fontFamily:"Cookie" }}>Dr. Linjiang Chen</h3>
          <h5 className='px-5 fw-semibold'>Assistant Professor</h5>
          <h6 className='px-5 fw-semibold'>School of Chemistry, University of Birmingham</h6>
          <h6 className='px-5 fw-semibold'>Tel: +44 (0) 121 414 3946</h6>
        </div>
      </div>
      </div></div>
      </div></Link>
        <div className='container'>
        <h2 className='text-center text-decoration-underline' style={{color: '#3cb043',fontFamily:"Pacifico"}}>Group Members</h2>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card' style={{ width: '13rem', backgroundColor:"rgb(80, 107, 142,0.9)" }}>
            <img src='./Team/Self.jpeg' className='card-img-top' alt='...' />
            <div className='card-body text-white'>
              <h5 className='card-title text-center'>Sandeep</h5>
              <h6 className='card-title text-center'>Research Intern</h6>
              <div className='text-center'>
                  <a href='https://imsandeep.me/' className='btn btn-dark'>
                    Connect
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
