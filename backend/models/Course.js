const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    details: { type: String, required: true }
});

const CourseModel = mongoose.model('Course', CourseSchema);
module.exports = CourseModel;
