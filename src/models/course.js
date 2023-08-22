import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    teacherName: { type: String, required: true },
    students: { type: Array, required: true },
});

export default mongoose.model('Course', courseSchema);