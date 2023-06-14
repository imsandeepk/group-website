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

  return (
    <footer className="footer">
      <div className="container text-center">
        <div style={lineStyle}>
          <p className="mb-0">© 2023 LINJIANG CHEN.</p>
          <div>
            <AiFillLinkedin style={iconStyle} color="#3cb043" />
            <AiFillGithub style={iconStyle} color="#3cb043" />
            <AiFillTwitterSquare style={iconStyle} color="#3cb043" />
          </div>
        </div>
      </div>
    </footer>
  );
}
