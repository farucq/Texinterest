import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";
import "./home.css";

function Attendancemanagement() {
  return (
    <div>
      {/* ===== Breadcrumb & Title Section ===== */}
      <div className="container py-4">
        <Breadcrumb className="mb-3">
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: "/" }}
            className="fw-bold text-dark"
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: "/sb" }}
            className="fw-bold text-dark"
          >
            Companies
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Attendance Management System
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="text-center">
          <h2 className="fw-bold title-text mb-3">
            Attendance Management System
          </h2>
          <p className="text-muted desc-text mx-auto">
           Our Attendance Management system can track employee presence punctuality, and working hours with ease and transparancy 
          </p>
        </div>
      </div>

      {/* ===== What It Does Section ===== */}
      <section className="what-it-does-section text-white py-4 px-4">
        <div className="container">
          <div className="d-flex align-items-center mb-3">
            <ClipboardList size={32} className="text-white me-2" />
            <h4 className="fw-bold mb-0">What It Does</h4>
          </div>

         <ul className="list-size">
            <li>Tracks check-in & check-out times</li>
            <li>Late arrivals & early departures notifications</li>
            <li>Daily, weekly & monthly attendance reports</li>
            <li> Real-time integration with leave and holiday modules</li>
          </ul>

          <p className="mb-0">
          Get full visibility into your team's attendance
          </p>
        </div>
      </section>

     {/* ===== Key Benefits & Seamless Integration Section ===== */}
<section className="benefits-section py-4">
  <div className="container">
    <div className="row g-4 justify-content-center">
      {/* Left Box - Key Benefits */}
      <div className="col-md-6">
        <div className="benefit-box p-4 h-100 shadow-card">
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-bar-chart-fill text-primary fs-4 me-2"></i>
            <h5 className="fw-bold mb-0">📈  Key Benefits</h5>
          </div>
          <hr className="divider" />
          <ul className="list-unstyled mt-3 mb-0 benefit-list">
            <li>Absentees can be easily identified</li>
            <li>Time-saving automation for company teams</li>
            <li>Accurate payroll support with attendance data</li>
          </ul>
        </div>
      </div>

      {/* Right Box - Seamless Integration */}
      <div className="col-md-6">
        <div className="benefit-box p-4 h-100 shadow-card">
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-puzzle-fill text-success fs-4 me-2"></i>
            <h5 className="fw-bold mb-0">🧩  Seamless Integration</h5>
          </div>
          <hr className="divider" />
          <ul className="list-unstyled mt-3 mb-0 benefit-list">
            <li>Leave & Holiday Modules</li>
            <li>Access Control Systems</li>
          </ul>
        </div>
      </div>
    </div>
    <h4 className="fw-bold mt-4">  Get full visibility into your team's attendance.</h4>
  </div>
</section>

 {/* ===== Contact Section ===== */}
      <section className="contact-section py-4" >
        <div className="container text-center">
          <h4 className="fw-bold mb-3">Let’s Integrate the Attendance Module</h4>
          <h5 className="text-muted mb-4">
            Fill in the form and our team will connect with you shortly.
          </h5>
          <div className="contact-box mx-auto p-4">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="How can we collaborate?"
                ></textarea>
              </div>
              <div className="text-end">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Attendancemanagement;