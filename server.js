const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello, Vercel!' });
});

// Export the app to be used by Vercel
module.exports = app;

// Add this block for local development
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}
