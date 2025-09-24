import React from 'react';
import './footer.css';
import logo from '../assets/Texintrest-footer.png';

function Footer() {
  return (
    <div className='footer container-fluid'>
      
        {/* Newsletter Section */}
        <div className="newsletter text-center">
          <h4 className='mb-3'>Subscribe to Our Newsletter</h4>
          <p>Stay updated with the latest news and offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="footer-content">
          {/* About Section */}
          <div className='row'>
          <div className="col-4 footer-section about px-5">
            <div className="logo-text mb-5">
              <img src={logo} alt="Texinterest Logo" width={"250"} className="logo" />
            </div>
            <h5>ABOUT</h5>
            <p className="mission">
              Texinterest's mission is to share knowledge and provide a platform
              for users to add notes, articles, and views on various subjects.
            </p>
            <ul className="footer-links">
                <li><i className="fa fa-info-circle me-1"></i> About Us</li>
                <li><i className="fa fa-shield me-1"></i> Privacy Policy</li>
                <li><i className="fa fa-envelope me-1"></i> Contact Us</li>
            </ul>
            <div className="social-icons">
               <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fab fa-facebook"></i>
            </div>
            <p className="email">info@texinterest.com</p>
          </div>

            <div className='col-8'>
            <div className="row">
          {/* Internship */}
          <div className="col-4 footer-section ps-5">
            <h5>INTERNSHIP</h5>
            <ul>
              <li>Full Stack Developer</li>
              <li>Frontend Developer</li>
              <li>WordPress Developer</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-4 footer-section ps-5">
            <h5>CATEGORIES</h5>
            <ul>
              <li>Server Side Scripting</li>
              <li>Client Side Scripting</li>
              <li>Content Management System</li>
            </ul>
          </div>

          {/* Documentation */}
          <div className="col-4 footer-section ps-5">
            <h5>DOCUMENTATION</h5>
            <ul>
              <li>Privacy</li>
              <li>Cancellation & Refunds</li>
              <li>Terms and Conditions</li>
              <li>Shipping</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Top Interview Questions */}
          <div className="col-4 mt-3 footer-section ps-5">
            <h5>TOP INTERVIEW QUESTION</h5>
            <ul>
              <li>OOPs Questions</li>
              <li>HTML Questions</li>
              <li>CSS Questions</li>
              <li>JavaScript Questions</li>
              <li>Golang Questions</li>
            </ul>
          </div>

          {/* Sub Categories */}
          <div className="col-4 mt-3 footer-section ps-5">
            <h5>SUB CATEGORIES</h5>
            <ul>
              <li>HTML | CSS | PHP</li>
              <li>JavaScript | C# | C++</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
          </div>

          {/* Blogs */}
          <div className="col-4 mt-3 footer-section ps-5">
            <h5>BLOGS</h5>
            <ul>
              <li>What is Texinterest Blog?</li>
              <li>Top IT Skills to enter the IT World</li>
              <li>What is WordPress?</li>
              <li>PHP with Python</li>
              <li>Python install for Ubuntu</li>
              <li>Understanding the Python interpreter</li>
            </ul>
          </div>
          </div>
            </div>
        </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>Texinterest © 2025. All Rights Reserved</p>
        </div>
      
    </div>
  );
}

export default Footer;
