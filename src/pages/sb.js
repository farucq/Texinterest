import React from 'react'
import './home.css';
import internship from './images/internship.png';
import quiz from './images/Quiz.png';
import interview from './images/interview.png';
import blog from './images/blog.png';
import qa from './images/qa.png';

function sb() {
  return (
    <div>

      {/* ===== Companies Intro Section ===== */}
      <section className="container-fluid px-5 text-center py-3">
        <h2 className="blue-text fw-bold">Companies</h2>
        <p className="text-muted mb-3">
          Welcome to our company collaboration page. This is a one stop solution for those who want to provide internships through their institution.
          We will provide a professional system to maintain the internship system, unlike the previous teaching methods. This will give your intern a
          company working experience because there is an attendance module to track their attendance, a holiday module to track company holidays, task
          management here we provide a professional task management system, and we also have a work report management system.
          We use professional modules for each section. We believe collecting everything through email is outdated now most companies use
          multiple software tools to make their work easier. Interns will also feel the company atmosphere while using this system. Enjoy a seamless
          experience by collaborating with our team.
        </p>  
      </section>


       <section className="collaborate-section text-white py-4 px-5">
  <div className="container">
    <div className="row text-start">
      {/* Left Column */}
      <div className="col-lg-6 mb-3">
        <h3 className="fw-bold">Why collaborate With Us?</h3>
        <p>
          We provide a professional environment and collaborate with leading
          institutions to drive innovation and success.
        </p>
        <ul>
          <li>Support for providing internships in a professional setting</li>
          <li>Management systems to make your job easier</li>
          <li>Attendance module</li>
          <li>Holiday module</li>
          <li>Task management module</li>
          <li>Work report module</li>
        </ul>
      </div>

      {/* Right Column */}
      <div className="col-lg-6 mb-3">
        <h3 className="fw-bold">What You Will Get</h3>
        <p>
          We provide a professional environment and collaborate with leading
          institutions to drive innovation and success.
        </p>
        <ul>
          <li>Access to Skilled Interns</li>
          <li>Networking Opportunities</li>
          <li>Strategic Growth &amp; Support</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* ===== Our Modules Section ===== */}
      <section className="our-modules-section text-center py-3">
        <div className="container">
          <h2 className="section-heading mb-3">Our Modules</h2>
          <div className="row justify-content-center">
            {[
              { title: "Holiday Management System", desc: "Employees are aware of upcoming holidays." },
              { title: "Attendance Management System", desc: "Track employee attendance, punctuality, and daily check-ins using smart tools. Also provides leave management systems." },
              { title: "Task Management Tool", desc: "Assign, track, and evaluate tasks and progress for better project results. Evaluate employee work progress." },
              { title: "Work Management System", desc: "Tracking employees' daily activity reports." },
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6 mb-3" key={index}>
                <div className="module-card shadow-sm h-100 d-flex flex-column">
                  <h5 className="module-title">{item.title}</h5>
                  <hr className="divider mx-auto" />
                  <p className="module-text flex-grow-1">{item.desc}</p>
                  <button className="btn read-btn mt-auto">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

         {/* ===== Our Impact & Collaboration Section ===== */}
<section className="impact-section container text-center py-5">
  {/* --- Our Impact --- */}
  <h2 className="fw-bold blue-text mb-4">Our Impact</h2>
  <div className="row justify-content-center mb-5">
    <div className="col-md-3 col-6 mb-3">
      <h1 className="fw-bold blue-text">20+</h1>
      <p className="text-muted mb-0">Companies Collaborated</p>
    </div>
    <div className="col-md-3 col-6 mb-3">
      <h1 className="fw-bold blue-text">500+</h1>
      <p className="text-muted mb-0">Interns Placed</p>
    </div>
    <div className="col-md-3 col-6 mb-3">
      <h1 className="fw-bold blue-text">100+</h1>
      <p className="text-muted mb-0">Industries Served</p>
    </div>
  </div>

  {/* --- How to Collaborate --- */}

  
  <h3 className="fw-bold blue-text mb-4">How to Collaborate</h3>
  <div className="row justify-content-center">
    {[
      { step: "1. Apply", text: "Submit a collaboration request" },
      { step: "2. Meeting", text: "Discuss your goals with our team." },
      { step: "3. Agreement", text: "Sign a collaboration agreement." },
      { step: "4. Partnership", text: "Start working together for growth" },
    ].map((item, index) => (
      <div className="col-md-3 col-sm-6 mb-3" key={index}>
        <div className="collab-step-card h-100">
          <h6 className="fw-bold blue-text mb-2">{item.step}</h6>
          <p className="text-muted mb-0">{item.text}</p>
        </div>
      </div>
    ))}
  </div>

  {/* --- Collaboration Form --- */}
  <div className="mt-5 d-flex justify-content-center">
    <div className="collab-form text-start">
      <h4 className="fw-bold text-center mb-4">Let’s Work Together</h4>
      <form>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Company Name"
            className="form-control collab-input"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Mail ID"
            className="form-control collab-input"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="How can we collaborate ?"
            maxLength="500"
            className="form-control collab-input"
            rows="4"
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn collab-submit fw-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</section>





      {/* ===== FAQ Section ===== */}
      <section className="container py-3 faq-section">
        <h2 className="blue-text fw-bold mb-3">FAQs</h2>
        <div className="faq-container">
          {[
            { q: "How does Texinterest internship platform benefit the companies?", a: "Texinterest helps companies manage interns efficiently by providing attendance tracking, task management, and feedback modules." },
            { q: "How to apply in Texinterest platform for internship programs?", a: "Students can easily register and apply for internships through the Texinterest portal." },
            { q: "How to get an internship at a company?", a: "Interns will work on real-world projects involving frontend and backend development, gaining practical experience." },
            { q: "How does company internship certificate given to the interns through Texinterest?", a: "Certificates are issued by the company or organization offering the internship via the Texinterest platform." },
            { q: "Is there any specific company internship certificate format under the certificate?", a: "Yes, each company may follow a standardized format approved within Texinterest for validation." },
            { q: "How does Texinterest helps companies collaboration?", a: "It connects companies with skilled interns and provides tools for managing internship programs efficiently." },
            { q: "Who is providing company internship letter to the interns?", a: "The partnered company or institution issues internship letters directly to the interns via Texinterest." },
            { q: "Does Texinterest supports startup company internship programs?", a: "Yes, Texinterest supports both established and startup companies to host internships." },
            { q: "Which is the best software company internship under Texinterest?", a: "Multiple top-rated software companies collaborate with Texinterest; availability depends on current openings." },
            { q: "How does Texinterest collecting Feedback from students?", a: "Texinterest collects structured feedback through online forms after internship completion." }
          ].map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling;
                  e.currentTarget.classList.toggle("active");
                  content.style.maxHeight
                    ? (content.style.maxHeight = null)
                    : (content.style.maxHeight = content.scrollHeight + "px");
                }}
              >
                {item.q}
                <span className="arrow">▼</span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ===== Other Resources Section ===== */}
<section className="resources-section container py-5 text-center">
  <h2 className="fw-bold blue-text mb-4">Other Resources</h2>
  <div className="row justify-content-center">
    {[
      {
        img: internship,
        title: "Internship",
        desc: "Hands-on projects to improve your skills.",
      },
      {
        img: quiz,
        title: "Quiz",
        desc: "Test your knowledge with interactive quizzes.",
      },
      {
        img: interview,
        title: "Interview Questions",
        desc: "Prepare for interviews with curated question sets.",
      },
      {
        img: blog,
        title: "Blogs",
        desc: "Add your technical blogs and read technical topics.",
      },
      {
        img: qa,
        title: "Q&A",
        desc: "Ask your coding related doubts and get answers.",
      },
    ].map((item, index) => (
      <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={index}>
        <div className="resource-card shadow-sm h-100 d-flex flex-column align-items-center">
          <div className="resource-img mb-3">
            <img
              src={item.img}
              alt={item.title}
              className="img-fluid rounded"
            />
          </div>
          <h5 className="fw-bold blue-text">{item.title}</h5>
          <p className="text-muted small">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>






    </div>
  )
}

export default sb;
