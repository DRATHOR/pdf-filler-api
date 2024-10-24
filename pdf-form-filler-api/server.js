const express = require('express');
const form16 =require('./Form16/form16.json')
const cors= require('cors');
const app = express();
const PORT = process.env.PORT || 4400;

// Middleware for JSON parsing (if needed)
app.use(cors());
app.use(express.json());

// Sample data to return
const sampleData = {
    message: "Hello, World!",
    data: {
        key1: "value1",
        key2: "value2"
    }
};

// GET endpoint
app.get('/api/data', (req, res) => {
    res.json(form16);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
