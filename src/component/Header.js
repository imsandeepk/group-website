import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '25vh' }}>
      <div className="container-fluid h-100 d-flex flex-column justify-content-end">
        <h1 className="text-center" style={{ color: '#FFD800' }}>
          PROFESSOR LINJIANG CHEN
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link mx-3 text-white" to="/">
              Home
            </Link>
            <Link className="nav-link mx-4 text-white" to="/about">
              Linjiang Chen
            </Link>
            <a className="nav-link mx-4 text-white" href="https://scholar.google.co.uk/citations?user=ZprWaMkAAAAJ&hl=en">
              Publications
            </a>
            <Link className="nav-link mx-4 text-white d-none d-lg-inline" to="/CV">
              CV
            </Link>
            <Link className="nav-link mx-4 text-white d-none d-lg-inline" to="/team">
              Group
            </Link>
            <Link className="nav-link mx-4 text-white" to="/contact">
              Contact US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
