const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Placeholder route
app.get('/exam-group', (req, res) => {
    res.json({ message: "Group <your_group> API" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const examsRoutes = require('./routes/exams');
app.use('/api', examsRoutes);
