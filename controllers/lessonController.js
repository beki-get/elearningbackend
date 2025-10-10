const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient(); // ✅ initialize Prisma

// Create a new lesson
const createLesson = async (req, res) => {
  try {
    const { title, videoUrl, courseId } = req.body;

    // Validate required fields
    if (!title || !videoUrl || !courseId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const lesson = await prisma.lesson.create({
      data: {
        title,
        videoUrl,
        courseId: Number(courseId), // convert to number
      },
    });

    res.json(lesson);
  } catch (err) {
    console.error(err); // ✅ log the real error for debugging
    res.status(500).json({ error: "Failed to create lesson" });
  }
};

// Get all lessons by course
const getLessonsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const lessons = await prisma.lesson.findMany({
      where: { courseId: Number(courseId) },
    });
    res.json(lessons);
  } catch (err) {
    console.error(err); // ✅ log the real error
    res.status(500).json({ error: "Failed to fetch lessons" });
  }
};

module.exports = { createLesson, getLessonsByCourse };
