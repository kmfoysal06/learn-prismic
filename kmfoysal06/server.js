const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve Next.js static assets (CSS, JS, images, chunks)
app.use('/_next/static', express.static(path.join(__dirname, '.next', 'static')));

// Serve other .next assets (build-manifest, etc.)
app.use('/_next', express.static(path.join(__dirname, '.next')));

// Serve public files
// app.use(express.static(path.join(__dirname, 'public')));



// Serve the Next.js production build from the `.next` folder
app.use(express.static(path.join(__dirname, '.next')));

// Serve public files (like /icon.png)
app.use(express.static(path.join(__dirname, 'public')));

// All other routes -> serve the HTML pages from .next/server/pages
app.get('/*', (req, res) => {
  const fs = require('fs');
  const url = req.url === '/' ? '/index.html' : `${req.url}.html`;
  const filePath = path.join(__dirname, '.next', 'server', 'app', url);

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      res.status(404).send('Page not found');
    } else {
      res.send(content);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
