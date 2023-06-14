import React from 'react';

export default function Footer() {
  const lineStyle = {
    borderTop: '1px solid #ccc',
    marginTop: '10px',
    marginBottom: '10px',
  };

  return (
    <footer className="footer">
      <div className="container text-center">
        <div style={lineStyle}></div>
        <p className="mb-0">© 2023 LINJIANG CHEN.</p>
      </div>
    </footer>
  );
}
