const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');


const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');
app.use(
    cors({
      origin: "*", // Allow requests only from frontend
      methods: "GET,POST,PUT,DELETE",
    })
  );
const courses = [
    {
        id: 1,
        title: "Data Science and Machine Learning",
        description: "Learn Data Science and Machine Learning with Python.",
        details: "This course covers Python, Pandas, NumPy, Scikit-Learn, Deep Learning, and more."
    }
];

app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// Get Single Course by ID
app.get('/api/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ message: "Course not found" });
    }
});

app.post('/api/NewCourse', async (req, res) => {
    const { title, description, details } = req.body;
    if (!title || !description || !details) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newCourse = new CourseModel({ title, description, details });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: "Error adding course", error });
    }
});

app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});