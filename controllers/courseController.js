const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: { instructor: { select: { id: true, name: true, email: true } } },
    });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get courses by instructor (with enrolled students)
const getInstructorCourses = async (req, res) => {
  const { instructorId } = req.params;
  try {
    const courses = await prisma.course.findMany({
      where: { instructorId: parseInt(instructorId) },
      include: {
        enrollments: {
          include: {
            student: { select: { id: true, name: true, email: true } },
          },
        },
      },
    });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Create a course
const createCourse = async (req, res) => {
  const { title, description, category, price, instructorId, imageUrl } = req.body;
  try {
    const course = await prisma.course.create({
      data: { title, description, category, price, instructorId, imageUrl },
    });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a course
const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, price, image } = req.body;
  try {
    const course = await prisma.course.update({
      where: { id: parseInt(id) },
      data: { title, description, category, price, image },
    });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a course
const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const { id } = req.params;
    await prisma.course.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCourses, createCourse, updateCourse, deleteCourse, getInstructorCourses };
