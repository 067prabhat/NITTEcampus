import React, { useState } from "react";
import "./newCourse.css";

const NewCourse = ({ onClose, onCourseAdded }) => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleInputChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseData.title || !courseData.description || !courseData.link) {
      alert("Please fill all fields!");
      return;
    }
    onCourseAdded(courseData);
    setCourseData({ title: "", description: "", link: "" });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add a New Course</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={courseData.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Short Description"
            value={courseData.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="link"
            placeholder="Course Link (e.g., /new-course)"
            value={courseData.link}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-button">Add Course</button>
          <button onClick={onClose} className="close-button">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default NewCourse;
