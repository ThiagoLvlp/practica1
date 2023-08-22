import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  id: { type: String, required: true, unique: true },
  courses: { type: Array, required: true },
});

export default mongoose.model('Student', studentSchema);