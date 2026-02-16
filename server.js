const express = require('express');
const fileHandler = require('./modules/fileHandler.js');

const app = express();
const PORT = 3000;

app.get('/employees', async (req, res) => {
    try {
        const employees = await fileHandler.read();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read employee data' });
    }
});

app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


