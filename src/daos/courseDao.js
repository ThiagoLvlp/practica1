import Course from '../models/course.js';

class CourseDao {
static async create(courseData) {
    return Course.create(courseData);
}

static async getAll() {
    return Course.find();
}
}

export default CourseDao;