const express = require("express");
const router = express.Router();

let exams = [
  { id: 1, name: "INTPROG Exam", date: "2025-03-25" },
  { id: 2, name: "TESTQUA Exam", date: "2025-03-26" }
];


router.get("/", (req, res) => {
  res.json(exams);
});

module.exports = router;
