import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai';

export default function Footer() {
  const lineStyle = {
    borderTop: '1px solid #080808',
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    color: '#080808',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const iconStyle = {
    fontSize: '30px',
    marginLeft: '10px',
  };

  const imageSize = {
    width: '60px',
    height: '60px',
  };

  return (
    <footer className="footer">
      <div className="container text-center">
        <div style={lineStyle}>
          <p className="mb-0">© 2023 LINJIANG CHEN.</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src='favicon.ico' alt='Logo' style={imageSize} />
          </div>
        </div>
      </div>
    </footer>
  );
}
