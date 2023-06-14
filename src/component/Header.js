import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar bg-dark navbar-expand-lg" style={{ height: '25vh' }}>
      <div className="container-fluid h-100 d-flex flex-column justify-content-end">
        <h1 className="text-center" style={{ color: '#FFD800' }}>
          PROFESSOR LINJIANG CHEN
        </h1>
        <div className="navbar-nav justify-content-center text-white">
          <Link className="nav-link mx-3 text-white" to="/">
            Home
          </Link>
          <Link className="nav-link mx-4 text-white" to="/about">
            Linjiang Chen
          </Link>
          <a className="nav-link mx-4 text-white" href="https://scholar.google.co.uk/citations?user=ZprWaMkAAAAJ&hl=en">
            Publications
          </a>
          <Link className="nav-link mx-4 text-white" to="/CV">
            CV
          </Link>
          <Link className="nav-link mx-4 text-white" to="/team">
            Group
          </Link>
          <Link className="nav-link mx-4 text-white" to="/contact">
            Contact US
          </Link>
        </div>
      </div>
    </nav>
  );
}

