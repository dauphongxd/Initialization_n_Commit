const express = require('express');
const app = express();
const port = 5555; // Changed from 3000 to avoid conflicts

app.get('/', (req, res) => {
  res.send('Hello from branch B');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});