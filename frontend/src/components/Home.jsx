import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to NITT ECampus</h1>
        <p>Your gateway to online learning at NIT Trichy</p>
        <Link to="/courses" className="btn btn-light">
          Explore Courses
        </Link>
      </header>

      <div className="moving-text-wrapper">
        <div className="moving-text">
          🚨 Important Update: Please check the Notice Board for upcoming events! 🚨
          &nbsp;&nbsp;&nbsp;🆘 For assistance, contact our Helpline: <strong>1800-123-4567</strong> 🆘
          &nbsp;&nbsp;&nbsp;🏆 NIT Trichy is ranked <strong>9th</strong> in the NIRF Engineering Rankings 2023. 🏆
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <section className="notice-board">
              <div>
                <h4 className="section-title">Notice Board</h4>
                <ul className="notice-list">
                  <hr />
                  <li>📢 Mid-term exams start next week. <img src="https://research.mgu.ac.in/wp-content/uploads/2021/07/new-icon-gif-4.gif" alt="New" /></li>
                  <hr />
                  <li>📢 Hostel maintenance scheduled on 5th Feb. <img src="https://research.mgu.ac.in/wp-content/uploads/2021/07/new-icon-gif-4.gif" alt="New" /></li>
                  <hr />
                  <li>📢 Workshop on AI: Register by 10th Feb. <img src="https://research.mgu.ac.in/wp-content/uploads/2021/07/new-icon-gif-4.gif" alt="New" /></li>
                  <hr />
                  <li>📢 Last date for course enrollment: 15th Feb. <img src="https://research.mgu.ac.in/wp-content/uploads/2021/07/new-icon-gif-4.gif" alt="New" /></li>
                </ul>
              </div>
            </section>
          </div>

          <div className="col-md-6">
            <section className="image-slideshow">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block" src="images/Library.jpeg" alt="Slide 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src="https://www.nitt.edu/home/students/facilitiesnservices/tp/TP.jpg" alt="Slide 2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src="images/Nitt1.jpeg" alt="Slide 3" />
                </Carousel.Item>
              </Carousel>
            </section>
          </div>

          <div className="col-md-3">
            <section className="student-corner">
              <div>
                <h4 className="section-title">Student Corner</h4>
                <hr />
                <ul className="student-list">
                  <li>📚 Access your study materials</li>
                  <hr />
                  <li>📝 Submit assignments</li>
                  <hr />
                  <li>📅 Check your timetable</li>
                  <hr />
                  <li>📊 View your grades</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <section className="about-section">
          <h2 className="text-center">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>Vision</h3>
              <p>To be a university globally trusted for technical excellence where learning and research integrate to sustain society and industry.</p>
              <h3>Mission</h3>
              <ul>
                <li>To offer undergraduate, postgraduate, doctoral and modular programs in emerging areas.</li>
                <li>To create a converging learning environment to serve a dynamically evolving society.</li>
                <li>To promote innovation for sustainable solutions.</li>
                <li>To be an intellectual ecosystem where human capabilities develop holistically.</li>
              </ul>
              <Link to="/About" className="btn btn-primary btn-sm mt-2">Read More</Link>
            </div>
            <div className="col-md-6 text-center">
              <img src="images/NITT-Main-Gate.jpeg" alt="About Us" className="about-image" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
