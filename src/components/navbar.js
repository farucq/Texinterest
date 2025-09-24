import React from 'react';
import logo from '../assets/texintrest-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Search, LogIn , ChevronDown } from "lucide-react";
import './navbar.css';

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid px-5">
          
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" width={"190"} className="me-2 mb-0" />
          </a>

          {/* Hamburger toggle button */}
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

          {/* Navigation links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">Companies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">Internship</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle  fw-semibold" href="#" role="button">
                  Courses<ChevronDown size={16} />
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Course 1</a></li>
                  <li><a className="dropdown-item" href="#">Course 2</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" >
                  Interviews<ChevronDown size={16} />
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Interview 1</a></li>
                  <li><a className="dropdown-item" href="#">Interview 2</a></li>
                </ul>
              </li>
            </ul>

            {/* Right actions */}
            <div className="d-flex align-items-center actions gap-3">
              {/* Search icon */}
              <button className="btn btn-link p-0">
                <Search size={20} strokeWidth={2} />
              </button>

              {/* Divider */}
              <div className="vr mx-2"></div>

              {/* Sign in */}
              <a className="nav-link d-flex align-items-center fw-semibold" href="#">
                <LogIn size={18} className="me-1" /> Sign in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
