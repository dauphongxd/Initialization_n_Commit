const express = require('express');
const app = express();
const port = 5555; // Changed from 3000 to avoid conflicts

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/status', (req, res) => {
  res.send(`Status: OK - ${new Date().toISOString()}`);
});