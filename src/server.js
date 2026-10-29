const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get('/api', (req, res) => {
    res.json({
        message: 'Travel Itinerary Planner backend is working!'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});