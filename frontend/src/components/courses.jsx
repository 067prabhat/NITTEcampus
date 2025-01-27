import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./courses.css";
import NewCourse from "./NewCourse";

const initialCourses = [
  {
    id: 1,
    title: "M.Tech in Data Science and Machine Learning",
    description: "Master the concepts of Data Science, AI, and Machine Learning.",
    link: "/DataScience",
  },
  {
    id: 2,
    title: "M.Tech in Computer Science",
    description: "Advanced concepts in Computer Science including algorithms, AI, and security.",
    link: "/mtech-cs",
  },
  {
    id: 3,
    title: "B.Tech in Artificial Intelligence",
    description: "Learn AI, Machine Learning, and Deep Learning with practical applications.",
    link: "/btech-ai",
  },
  {
    id: 4,
    title: "M.Sc in Cyber Security",
    description: "Cybersecurity fundamentals, ethical hacking, and threat analysis.",
    link: "/msc-cybersecurity",
  },
  {
    id: 5,
    title: "BCA in Cloud Computing",
    description: "Cloud services, AWS, and cloud security for modern IT infrastructure.",
    link: "/bca-cloud",
  },
];

const Courses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typedText, setTypedText] = useState("");
  
  // Animate the search input text
  useEffect(() => {
    let currentText = "";
    for (let i = 0; i < searchTerm.length; i++) {
      setTimeout(() => {
        currentText += searchTerm[i];
        // setTypedText(currentText);
      }, 100 * i); // 100ms delay per letter
    }
  }, [searchTerm]);

  const addNewCourse = (newCourse) => {
    console.log("Hii");
    setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
    setShowModal(false);
  };

  return (
    <div className="courses-container">
      <h1 className="page-title">Explore Our Courses</h1>
      
      {/* Search Box */}
      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="What do you want to learn?" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <i className="search-icon fas fa-search"></i>
      </div>
      <div className="search-result">
        <span>{typedText}</span>
      </div>

      <button
        className="add-course-button"
        onClick={() => {
          console.log("Add Course clicked");
          setShowModal(true);
        }}
      >
      Add New Course
    </button>

      <div className="courses-grid">
        {courses.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase())).map((course) => (
          <div key={course.id} className="course-card">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <Link to={course.link}>
              <button className="explore-button">Explore</button>
            </Link>
          </div>
        ))}
      </div>

      {showModal && <NewCourse onClose={() => setShowModal(false)} onCourseAdded={addNewCourse} />}
    </div>
  );
};

export default Courses;
