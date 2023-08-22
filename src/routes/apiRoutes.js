// src/routes/apiRoutes.js
import express from 'express';
import StudentDao from '../daos/studentDao.js';
import CourseDao from '../daos/courseDao.js';

const router = express.Router();

router.post('/students', async (req, res) => {
try {
    const student = await StudentDao.create(req.body);
    res.status(201).json(student);
} catch (error) {
    res.status(500).json({ error: 'Error creating student' });
}
});

router.get('/students', async (req, res) => {
try {
    const students = await StudentDao.getAll();
    res.json(students);
} catch (error) {
    res.status(500).json({ error: 'Error getting students' });
}
});

router.post('/courses', async (req, res) => {
try {
    const course = await CourseDao.create(req.body);
    res.status(201).json(course);
} catch (error) {
    res.status(500).json({ error: 'Error creating course' });
}
});

router.get('/courses', async (req, res) => {
try {
    const courses = await CourseDao.getAll();
    res.json(courses);
} catch (error) {
    res.status(500).json({ error: 'Error getting courses' });
}
});

export default router;
