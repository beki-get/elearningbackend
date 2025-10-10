const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/course");
const enrollmentRoutes = require("./routes/enrollment");
const lessonRoutes = require("./routes/lesson");
const paymentRoutes = require("./routes/paymentRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/payments", paymentRoutes);

// Health check

app.get("/", (req, res) => {
  res.json({ message: "Backend is running ✅" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));