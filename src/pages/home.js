import React from 'react';
import Nabar from '../components/navbar';
import Footer from '../components/footer';
import { Briefcase, Users, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import Profile from '../assets/UMARULFAROOK.jpg';

function Home() {
  
  return (

    <div>
      <Nabar />

      <section className="container-fluid px-5 text-center py-5">
        {/* Hero Heading */}
        <h1 className="blue-text fw-bold display-5">
          Knowledge is power, but <br />
          wisdom is using it well
        </h1>
        <p className="text-muted mb-4">
          Internships turn knowledge into real world skills
        </p>

        {/* Buttons for Companies, Educators, Internship */}
        <div className="d-flex justify-content-center gap-3 mb-5">
          <button className="btn bg-white btn-light shadow-sm d-flex align-items-center">
            <Briefcase className="me-2" size={18} /> Companies: Hire
          </button>
          <button className="btn bg-white btn-light shadow-sm d-flex align-items-center">
            <Users className="me-2" size={18} /> Educators: Partner
          </button>
          <button className="btn bg-white btn-light shadow-sm d-flex align-items-center">
            <FileText className="me-2" size={18} /> Internship: Apply
          </button>
        </div>

        {/* Welcome Section */}
        <h2 className="blue-text fw-bold">Welcome to TexInterest</h2>
        <p className="text-secondary fw-semibold">
          Where knowledge, innovation and collaboration meet
        </p>
        <p className="text-muted">
          TexInterest is a place for learners, students, non-technical students,
          those interested in acquiring new technologies and those with a passion
          for technology to learn, earn, explore and grow. If you are starting
          your journey in the world of IT, you can participate in our internship
          programs to achieve your goals. We provide real-world resources and
          technical community collaborations. Our mission is to make technical
          education accessible, engaging and aligned with real industry needs.
          Join us and turn your curiosity into skills.
        </p>

        {/* CTA Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4 mb-5">
          <button className="hero-btn shadow px-4 py-2">Sign Up</button>
          <button className="hero-btn shadow px-4 py-2">
            Explore TexInterest
          </button>
        </div>

        {/* Collaborating Companies */}
        <div className="text-start mb-5">
          <div>
            <h3 className="fw-bold blue-text">Our Collaborating Companies</h3>
            <p className="text-muted">
              IT companies are collaborated with Texinterest due to certain
              technical and business reasons. Texinterest offers meaningful
              collaborations with leading organizations to drive Internship and
              training programs. Through Texinterest, companies can post their
              Internship programs, add their job requirements, etc. Texinterest
              also provides a provision to manage internship tasks through a task
              management system, work report, and leave management system.
            </p>
          </div>
          <div className="justify-content-end d-flex">
            <button
              className="hero-btn btn-dark shadow px-4 py-2"
              style={{ borderRadius: "8px" }}
            >
              Lets Collaborate
            </button>
          </div>
        </div>

        {/* Internship Apply Section */}
        <div className="text-start">
          <div>
            <h3 className="fw-bold blue-text">
              Apply for an internship and discover your future
            </h3>
            <p className="text-muted">
              We offer internships for beginners, intermediate learners and
              advanced professionals. All internships are tailored to the level
              and goals of the learner. We have a wide range of internship
              opportunities in IT-related fields such as full stack, frontend,
              SEO, etc. Those who are interested in learning can join our
              internship programs. Along with our professional modules, the
              company environment is also different from the internships offered
              here. Students get the chance to work on live projects, and it
              enhances your future and your problem-solving skills, practical
              thinking, and decision-making ability.
            </p>
          </div>
          <div className="justify-content-end d-flex">
            <button
              className="hero-btn btn-dark shadow px-4 py-2"
              style={{ borderRadius: "8px" }}
            >
              Explore Internship
            </button>
          </div>
        </div>
      </section>

      {/* === Testimonial Section === */}
      <section className="container-fluid px-5 py-5 testimonial-section">
      <h3 className="blue-text fw-bold mb-4 text-start">Testimonial</h3>
      <div className="d-flex justify-content-center align-items-center gap-3">
        {/* Left Arrow */}
        <div className="testimonial-arrows">
          <ChevronLeft size={24} />
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-card text-center">
          <p className="mb-4">
            My internship at Squarebraket Innovations was a great learning
            experience. I worked on live projects like BikeLeague and Mythlok
            using WordPress, HTML, CSS, and Bootstrap, and also learned React
            to build dynamic web apps. Under the guidance of CEO Hiran Narayanan,
            I improved both my technical and problem-solving skills while
            collaborating with the team. Highly recommend for anyone looking to
            grow in frontend development!
          </p>

          {/* Profile Section */}
          <div className="d-flex align-items-center justify-content-center gap-3">
            <img
              src={Profile}
              alt="profile"
              className="profile-img"
            />
            <div className="text-start">
              <h6 className="mb-0 text-white">Abhiram</h6>
              <div className="text-warning">★★★★★</div>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <div className="testimonial-arrows">
          <ChevronRight size={24} />
        </div>
      </div>
    </section>
    {/* === Recommended Section === */}
<section className="container-fluid px-5 py-5 recommended-section">
  <h3 className="blue-text fw-bold mb-1">Recommended For You</h3>
  <p className="text-muted mb-4">
    Based on your preferences and interests
  </p>

  <div className="row g-4">
    {/* Card 1 */}
    <div className="col-md-3 col-sm-6">
      <div className="recommend-card h-100">
        <h5 style={{ marginBottom: '0rem' }} className="fw-bold">Front End Development <br/>Internship</h5>
        <hr style={{ marginBottom: '.1rem' }}/>
        <p>
          This course introduces you to the basics of building websites
          and web applications using Core PHP. You’ll learn how websites
          work behind the scenes and how to connect a webpage to a
          database. It’s a great choice if you’re starting fresh and want
          to build
        </p>
        <button className="view-btn">View Details</button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-3 col-sm-6">
      <div className="recommend-card h-100">
        <h5 style={{ marginBottom: '1.25rem' }} className="fw-bold">WordPress Development<br/> Internship</h5>
        <hr style={{ marginBottom: '1.2rem' }}/>
        <p>
          To seek a 3-month internship in WordPress Development that will
          help you learn about PHP and the creation of themes and plugins
          for WordPress. To develop dynamic websites while gaining
          hands-on experience in website management, customization, and
          troubles
        </p>
        <button className="view-btn">View Details</button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-3 col-sm-6">
      <div className="recommend-card h-100">
        <h5 style={{ marginBottom: '.255rem' }} className="fw-bold">Front End Development<br/> Internship</h5>
        <hr />
        <p>
          To obtain a 3-month internship in Search Engine Optimization
          (SEO), you can leverage your understanding of keyword research,
          link building, Technical SEO, Off-page SEO, analytics, tools,
          and much more to improve website visibility and ranking while
          learning
        </p>
        <button className="view-btn">View Details</button>
      </div>
    </div>

    {/* Card 4 */}
    <div className="col-md-3 col-sm-6">
      <div className="recommend-card h-100">
        <h5 className="fw-bold">UI/UX Designer<br/> Internship</h5>
        <hr />
        <p>
          User Interface (UI) design and User Experience (UX) design are
          the two pillars that play an important role in the area of
          digital product development. A UI/UX internship is a short-term
          position where you assist in designing and improving user
          interfaces
        </p>
        <button className="view-btn">View Details</button>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
