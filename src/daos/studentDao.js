import Student from '../models/student.js';

class StudentDao {
    static async create(studentData) {
    return Student.create(studentData);
}

static async getAll() {
    return Student.find();
}}

export default StudentDao;