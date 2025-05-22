const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'public')));

// CARDS
app.get('/cards/blood-on-timber', (req, res) => {
  console.log('requested: /cards/blood-on-timber');
  const filePath = path.join(__dirname, 'public', 'cards', 'blood-on-timber', 'collection.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading card collection:', err);
      return res.status(500).json({ error: 'Unable to read card data.' });
    }

    try {
      const parsed = JSON.parse(data);
      console.log('PARSED', parsed);
      res.json(parsed);
    } catch (parseErr) {
      console.error('Error parsing card data:', parseErr);
      res.status(500).json({ error: 'Invalid card JSON.' });
    }
  });
});

// MUSIC
app.get('/music/blood-on-timber', (req, res) => {
  const jsonPath = path.join(__dirname, 'public', 'music', 'blood-on-timber', 'collection.json');

  console.log('/music/blood-on-timber');

  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading collection.json:', err);
      return res.status(500).json({ error: 'Unable to load music collection.' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('Error parsing collection.json:', parseErr);
      res.status(500).json({ error: 'Invalid JSON format in collection.' });
    }
  });
});

app.get('/music/scars-upon-stone', (req, res) => {
  const jsonPath = path.join(__dirname, 'public', 'music', 'scars-upon-stone', 'collection.json');

  console.log('/music/scars-upon-stone');

  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading collection.json:', err);
      return res.status(500).json({ error: 'Unable to load music collection.' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('Error parsing collection.json:', parseErr);
      res.status(500).json({ error: 'Invalid JSON format in collection.' });
    }
  });
});



app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
