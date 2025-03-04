const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvFilePath = path.join(__dirname, 'questions.csv');
const jsonFilePath = path.join(__dirname, 'questions.json');

try {
  // Read the CSV file
  const csvData = fs.readFileSync(csvFilePath, 'utf8');
  
  // Split the CSV into rows
  const rows = csvData.split('\n').filter(row => row.trim() !== '');
  
  // Extract headers (first row)
  const headers = rows[0].split(',').map(header => header.trim());
  
  // Convert header names to camelCase for JSON
  const jsonHeaders = headers.map(header => {
    // Convert "Problem Number" to "problemNumber"
    return header.toLowerCase().replace(/\s+(.)/g, (match, group) => group.toUpperCase());
  });
  
  // Process data rows
  const jsonData = rows.slice(1).map(row => {
    const values = row.split(',');
    const obj = {};
    
    // Map each value to its corresponding header
    jsonHeaders.forEach((header, index) => {
      obj[header] = values[index] ? values[index].trim() : '';
    });
    
    return obj;
  });
  
  // Write the JSON file
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
  
  console.log(`Successfully converted CSV to JSON. Output saved to ${jsonFilePath}`);
  console.log(`Converted ${jsonData.length} rows of data.`);
} catch (error) {
  console.error('Error converting CSV to JSON:', error);
} 