const express = require('express');
const router = express.Router();
// Import static course data (in production, this comes from DB)
const { COURSES, DEGREE_PROGRAMS } = require('../data/courses');

// GET /api/courses
router.get('/', (req, res) => {
  const { program } = req.query;
  const courses = program
    ? COURSES.filter((c) => c.programs.includes(program))
    : COURSES;
  res.json({ courses, total: courses.length });
});

// GET /api/courses/:code
router.get('/:code', (req, res) => {
  const course = COURSES.find(
    (c) => c.code.toLowerCase() === req.params.code.toLowerCase()
  );
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json({ course });
});

// GET /api/courses/programs
router.get('/meta/programs', (req, res) => {
  res.json({ programs: DEGREE_PROGRAMS });
});

module.exports = router;
