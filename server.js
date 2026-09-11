const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (CSS, JS, images, index.html) from the current directory
app.use(express.static(__dirname));

// Fallback to send index.html for root or missing routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
