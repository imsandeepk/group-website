import React from 'react';
import { Link } from 'react-router-dom';
import "./team.css"
export default function Team() {
  return (
    <div style={{ backgroundColor: "#fffff"}}>
        <div className='container'>
        <h2 className='text-center text-decoration-underline' style={{color: '#3cb043',fontFamily:"Pacifico"}}>Group</h2>

        <div className='row row-gap-5'>
        <div className='col-md-4'>
          <div className='card' style={{ width: '13rem', backgroundColor:"rgb(80, 107, 142,0.9)" }}>
            <img src='../Team/Prof.jpeg' className='card-img-top' alt='...' />
            <div className='card-body text-white'>
              <h5 className='card-title text-center'>Dr. Linjiang Chen</h5>
              <h6 className='card-title text-center'>Professor</h6>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card' style={{ width: '13rem', backgroundColor:"rgb(80, 107, 142,0.9)" }}>
            <img src='../Team/Self.jpeg' className='card-img-top' alt='...' />
            <div className='card-body text-white'>
              <h5 className='card-title text-center'>Sandeep </h5>
              <h6 className='card-title text-center'>Research Intern</h6>
            
            </div>
          </div>
        </div>

       

        </div>



        </div>
        </div>
  );
}
