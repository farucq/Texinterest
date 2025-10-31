import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";
import "./home.css";

function HolidayManagement() {
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
          <Breadcrumb.Item active>Holiday Management System</Breadcrumb.Item>
        </Breadcrumb>

        <div className="text-center">
          <h2 className="fw-bold title-text mb-3">Holiday Management System</h2>
          <p className="text-muted desc-text mx-auto">
            Our holiday management system helps employees and company teams track
            upcoming and past vacations without needing to manually communicate
            every holiday or request general lists.
          </p>
        </div>
      </div>

      {/* ===== What It Does Section (Full Width) ===== */}
      <section className="what-it-does-section text-white py-4 px-4">
        <div className="container">
          <div className="d-flex align-items-center mb-3">
            <ClipboardList size={32} className="text-white me-2" />
            <h4 className="fw-bold mb-0">What It Does</h4>
          </div>

          <ul className="list-unstyled mb-3">
            <li>• Customizable Holiday Calendar for companies</li>
            <li>• Real-time Notification</li>
            <li>• Integration with Attendance module</li>
            <li>• Overview of Past and Upcoming Holidays</li>
          </ul>

          <p className="mb-0">
            Enable company teams and employees to properly manage holidays and
            avoid scheduling conflicts.
          </p>
        </div>
      </section>

      {/* ===== Perfect For & How It Helps Section ===== */}
      <section className="perfect-section py-4">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Left Card - Perfect For */}
            <div className="col-md-6">
              <div className="info-card p-4 h-100 shadow-card">
                <h5 className="fw-bold text-blue mb-3">🏢 Perfect For</h5>
                <hr className="divider" />
                <ul className="list-unstyled mt-3 mb-0">
                  <li className="mb-2">📈 Internship providing companies</li>
                  <li className="mb-2">🌍 Remote & Hybrid Companies</li>
                  <li>🚀 Startups and SMEs</li>
                </ul>
              </div>
            </div>

            {/* Right Card - How It Helps */}
            <div className="col-md-6">
              <div className="info-card p-4 h-100 shadow-card">
                <h5 className="fw-bold text-blue mb-3">👜 How It Helps your Company</h5>
                <hr className="divider" />
                <ul className="list-unstyled mt-3 mb-0">
                  <li className="mb-2">🧮 Avoid Scheduling conflicts between employees and teams</li>
                  <li className="mb-2">👥 Help to increase productivity & clarity</li>
                  <li className="mb-2">📊 Automate leave balance calculations</li>
                  <li>⚖️ Follow labor laws</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
         <div className="text-start mt-4">
                <h5 className="fw-bold mb-3">
                  Ready to bring the Holiday Module into your workflow?
                </h5>
                 <button className="btn btn-blue fw-bold px-4 py-2 shadow-btn">
                        Get Start with Integration
                         </button>
         </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="contact-section py-4">
        <div className="container text-center">
          <h4 className="fw-bold mb-3">Let's Work Together</h4>

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

export default HolidayManagement;
