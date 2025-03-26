const express = require("express");
const router = express.Router();

let exams = [
  { id: 1, name: "INTPROG Exam", date: "2025-03-25" },
  { id: 2, name: "TESTQUA Exam", date: "2025-03-26" }
];


router.get("/", (req, res) => {
  res.json(exams);
});

router.post("/", (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1;
    exams.push(newExam);
    res.status(201).json({ message: "Exam added successfully", exam: newExam});
});

router.put('/exams/:id', (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const examIndex = exams.findIndex(e => e.id == id);

    if (examIndex === -1) return res.status(404).json({ message: "Exam not found" });

    exams[examIndex] = { ...exams[examIndex], ...updateData };
    res.json({ message: "Exam updated", exam: exams[examIndex] });
});


module.exports = router;
