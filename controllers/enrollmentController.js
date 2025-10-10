const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Enroll student
const enroll = async (req, res) => {
  const { studentId, courseId } = req.body;
  try {
    const existing = await prisma.enrollment.findFirst({
      where: { studentId, courseId },
    });
    if (existing) return res.status(400).json({ message: "Already enrolled" });

    const enrollment = await prisma.enrollment.create({
      data: { studentId, courseId },
    });
    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get student enrollments
const getEnrollments = async (req, res) => {
  const { studentId } = req.params;
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: { studentId: parseInt(studentId) },
      include: { course: true },
    });
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { enroll, getEnrollments };
