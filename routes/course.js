const express = require("express");
const router = express.Router();
const {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getInstructorCourses, 
} = require("../controllers/courseController");





// Public: get all courses
router.get("/", getCourses);

// Instructor: CRUD
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);
// Instructor: get own courses + students
router.get("/instructor/:instructorId", getInstructorCourses);


module.exports = router;
