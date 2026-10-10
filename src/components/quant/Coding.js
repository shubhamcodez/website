import React, { useState, useEffect } from 'react';
import QuantNavbar from '../QuantNavbar';

const Coding = () => {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to parse CSV data
  const parseCSV = (csvText) => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const data = lines.slice(1).filter(line => line.trim() !== '').map(line => {
      const values = line.split(',');
      return values;
    });
    return [headers, ...data];
  };

  // Fetch CSV data
  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await fetch('/quant-problems.csv');
        if (!response.ok) {
          throw new Error('Failed to fetch CSV data');
        }
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        
        setCsvData(parsedData);
        setFilteredData(parsedData.slice(1)); // Exclude header
        
        // Extract unique companies
        const uniqueCompanies = [...new Set(parsedData.slice(1).map(row => row[3]))];
        setCompanies(uniqueCompanies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching CSV data:', error);
        setLoading(false);
      }
    };

    fetchCSVData();
  }, []);

  useEffect(() => {
    let filtered = csvData.slice(1); // Exclude header
    
    if (difficultyFilter) {
      filtered = filtered.filter(row => row[2] === difficultyFilter);
    }
    
    if (companyFilter) {
      filtered = filtered.filter(row => row[3] === companyFilter);
    }
    
    setFilteredData(filtered);
  }, [difficultyFilter, companyFilter, csvData]);

  const sortTable = (columnIndex) => {
    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[columnIndex];
      const bValue = b[columnIndex];
      
      // Try to convert to numbers for numeric sorting
      const aNum = parseFloat(aValue);
      const bNum = parseFloat(bValue);
      
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }
      
      return aValue.localeCompare(bValue);
    });
    
    setFilteredData(sorted);
  };

  if (loading) {
    return (
      <div className="container quant-page">
        <QuantNavbar />
        <main>
          <h2>Quantitative Interview Problems</h2>
          <div className="text-center">
            <p>Loading problems data...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="container quant-page">
      <QuantNavbar />
      <main className="quant-main">
        <h2>Quantitative Interview Problems</h2>
        <div className="filter-container mb-4">
          <label htmlFor="difficultyFilter">Difficulty:</label>
          <select 
            id="difficultyFilter" 
            className="form-control d-inline-block w-auto"
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <label htmlFor="companyFilter" className="ml-3">Company:</label>
          <select 
            id="companyFilter" 
            className="form-control d-inline-block w-auto"
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
          >
            <option value="">All</option>
            {companies.map(company => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
        </div>

        <div className="seo-paragraph mb-4">
          <p>
            If you're aspiring to secure a Quantitative Developer or Software Engineering role at hedge funds and banks, it's crucial to prepare thoroughly for the interview process. Familiarizing yourself with the most frequently asked interview questions can significantly improve your chances of success. Key topics often include quantitative analysis, data structures, algorithms, and statistical modeling. Candidates should be ready to tackle questions like: "Can you explain the difference between a mean and a median?", "How would you implement a binary search algorithm?", and "What is your experience with machine learning algorithms?" Additionally, interviewers frequently assess practical knowledge of programming languages such as Python, C++, and Java in the context of financial modeling and algorithmic trading. By mastering these topics, you can stand out in the competitive finance job market and land your dream role.
          </p>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                {csvData[0]?.map((header, index) => (
                  <th key={index} onClick={() => sortTable(index)} style={{ cursor: 'pointer' }}>
                    {header} {index > 0 && <span className="text-muted">↕</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-3 text-muted">
          <small>Total problems: {filteredData.length} | Click column headers to sort</small>
        </div>
      </main>
    </div>
  );
};

export default Coding; 