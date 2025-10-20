import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { ChevronDown } from "lucide-react";
import './home.css';
function Internship() {
  const internships = [
    {
      title: "Front End Development Internship",
      description:
        "This course introduces you to the basics of building websites and web applications using Core PHP. You'll learn how websites work behind the scenes and how to connect a webpage to a database. It's a great choice if you're starting fresh and want to build.",
    },
    {
      title: "WordPress Development Internship",
      description:
        "To seek a 3-month internship in WordPress Development that will help you learn about PHP and the creation of themes and plugins for WordPress. To develop dynamic websites while gaining hands-on experience in website management, customization, and troubleshooting.",
    },
    {
      title: "Front End Development Internship",
      description:
        "To obtain a 3-month internship in Search Engine Optimization (SEO), you can leverage your understanding of keyword research, link building, Technical SEO, Off-page SEO, analytics tools, and much more to improve website visibility and ranking while learning.",
    },
    {
      title: "UI/UX Designer Internship",
      description:
        "User Interface (UI) design and User Experience (UX) design are the two pillars of digital product development. A UI/UX internship is a short-term position where you assist in designing and improving user interfaces.",
    },
  ];

  const blogPosts = [
    {
      title: "How to Excel in Full Stack Development",
      desc: "A comprehensive guide on becoming a proficient full stack developer in 2024...",
    },
    {
      title: "Top JavaScript Frameworks to Learn",
      desc: "Explore the latest frameworks that are shaping the future of front end development...",
    },
    {
      title: "What types of internships does Texinterest offer?",
      desc: "Hear from successful interns who made the most of their learning experience...",
    },
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="blue-text fw-bold display-5">Internship Programs</h2>
        <p style={{padding:'15px'}}className="text-drak">
          The Texinterest Internship collaborates with IT companies to offer Internship training, skill development programs, Job assistance, and many other 
opportunities to support students' personal, academic, and professional development.
 We offer many opportunities to grow with us and help students create professional experiences in their lives. Come and Join us to build for 
everyone.
        </p>
        <div className="d-flex justify-content-center gap-2 my-3 flex-wrap">
          <Button variant="outline-dark" size="md">
            All Internship
          </Button>
          <Button variant="outline-dark" size="md">
            Frontend
          </Button>
          <Button variant="outline-dark" size="md">
            Backend
          </Button>
          <Button variant="outline-dark" size="md">
            Full Stack
          </Button>
          <Button variant="outline-dark" size="md">
            More
          </Button>
        </div>
      </div>

      {/* Internship Cards */}

<div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
  {internships.map((item, index) => (
    <Card
      key={index}
      className="shadow-sm border-0 rounded-4 p-3 d-flex flex-column justify-content-between"
      style={{ width: '18rem', minHeight: '100%' }}
    >
      <Card.Body className="d-flex flex-column">
         <h5
      className="fw-bold text-center"
      style={{ color: '#002b47', fontSize: '1.2rem', minHeight: '3rem' }}
    >
      {item.title}
    </h5>
        <hr />
        <p
          className="small text-secondary mb-4"
          style={{ textAlign: 'justify', marginTop: '10px', flexGrow: 1 }}
        >
          {item.description}
        </p>
        <Button className="view-btn mt-auto" size="sm">
          View Details
        </Button>
      </Card.Body>
    </Card>
  ))}
</div>



      {/* Filters and Blog Section */}

      <div className="d-flex flex-row gap-4 p-4 mb-5 rounded-4 shadow-sm" style={{ background: '#fff' }}>
  {/* Left - Filters */}
  <div style={{ minWidth: '300px' }}>
    <h6 className="fw-bold mb-4">Filter by Tags</h6>
    <input 
      type="text"
      placeholder="All tags"
      className="form-control mb-4 border-dark"
    />
    <h6 className="fw-bold mb-4">Filter by Internship Type</h6>
    <input
      type="text"
      placeholder="Select type"
      className="form-control border-dark"
    />
  </div>

  {/* Right - Blog Posts */}
  <div className="flex-grow-1">
    <div style={{ background: '#002b47' }} className="p-4 text-white rounded-4 shadow-sm h-100">
      <h5 className="fw-bold mb-3">Recent Blog Posts</h5>
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-3 border-bottom border-light-subtle pb-2">
          <h5 className="fw-semibold mb-1">{post.title}</h5>
          <p className="small text-light mb-0">{post.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* FAQ Section */}
      <div className="mb-5">
        <h4 style={{color: '#002b47'}} className="fw-bold mb-3">Internship Programs: FAQs</h4>

        <div className="accordion" id="faqAccordion">
          {[
            "Why internship programs are important?",
            "Can Internship be considered as Work Experience?",
            "Which internship is best for CSE students?",
            "How to apply for Internship Program",
            "What internship means?",
            "Which internship is best for ECE students?",
          ].map((faq, index) => (
            <div className="accordion-item mb-2 border rounded-3 border-dark" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                >
                  {faq}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-secondary small">
                  The answer to "{faq}" goes here. You can customize this content
                  as per your FAQ answers.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Internship;
