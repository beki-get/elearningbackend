const express = require("express");
const router = express.Router();
const { enroll, getEnrollments } = require("../controllers/enrollmentController");

router.post("/", enroll);
router.get("/:studentId", getEnrollments);

module.exports = router;
