const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint to save data
app.post('/api/save-data', (req, res) => {
  const { fileName, data } = req.body;
  
  if (!fileName || !data) {
    return res.status(400).json({ error: 'Missing fileName or data' });
  }
  
  const filePath = path.join(__dirname, 'public', 'data', `${fileName}.json`);
  
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Data saved to ${filePath}`);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(`Error saving data to ${filePath}:`, error);
    return res.status(500).json({ error: error.message });
  }
});

// API endpoint to get data
app.get('/api/get-data/:fileName', (req, res) => {
  const { fileName } = req.params;
  
  if (!fileName) {
    return res.status(400).json({ error: 'Missing fileName' });
  }
  
  const filePath = path.join(__dirname, 'public', 'data', `${fileName}.json`);
  
  try {
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: `File ${fileName}.json not found` });
    }
    
    const fileData = fs.readFileSync(filePath, 'utf8');
    return res.status(200).json(JSON.parse(fileData));
  } catch (error) {
    console.error(`Error reading data from ${filePath}:`, error);
    return res.status(500).json({ error: error.message });
  }
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 