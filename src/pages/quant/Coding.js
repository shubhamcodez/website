import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import questionsData from './questions.json';

function Coding() {
  const { darkMode } = useContext(ThemeContext);
  const [allQuestions, setAllQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState('All');
  const [company, setCompany] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [companies, setCompanies] = useState(['All']);
  const [difficulties, setDifficulties] = useState(['All']);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Load data on component mount
  useEffect(() => {
    loadQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter questions when filters or all questions change
  useEffect(() => {
    filterQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty, company, allQuestions]);

  // Function to load questions from JSON
  const loadQuestions = () => {
    try {
      setLoading(true);
      console.log('Loading questions from JSON file...');
      
      // Set the questions data
      setAllQuestions(questionsData);
      
      // Extract unique companies and difficulties
      const uniqueCompanies = [...new Set(questionsData.map(q => q.company))]
        .filter(company => company && company.trim() !== '')
        .sort();
      
      const uniqueDifficulties = [...new Set(questionsData.map(q => q.difficulty))]
        .filter(difficulty => difficulty && difficulty.trim() !== '')
        .sort();
      
      setCompanies(['All', ...uniqueCompanies]);
      setDifficulties(['All', ...uniqueDifficulties]);
      setLoading(false);
    } catch (error) {
      console.error('Error loading questions:', error);
      setError('Failed to load questions. Please try again later.');
      setLoading(false);
    }
  };

  // Function to filter questions based on selected difficulty and company
  const filterQuestions = () => {
    let filtered = [...allQuestions];
    
    if (difficulty !== 'All') {
      filtered = filtered.filter(question => 
        question.difficulty === difficulty
      );
    }
    
    if (company !== 'All') {
      filtered = filtered.filter(question => 
        question.company === company
      );
    }
    
    // Apply sorting if configured
    if (sortConfig.key !== null) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key] || '';
        const bValue = b[sortConfig.key] || '';
        
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredQuestions(filtered);
  };

  // Handle difficulty filter change
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  // Handle company filter change
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  // Sort table by column
  const sortTable = (key) => {
    const keys = ['problemNumber', 'question', 'difficulty', 'company'];
    const columnKey = keys[key];
    
    let direction = 'ascending';
    if (sortConfig.key === columnKey && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key: columnKey, direction });
  };

  return (
    <div className={`coding-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Coding Questions</h1>
      
      {loading ? (
        <div className="loading">Loading questions...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <div className="filters">
            <div className="filter">
              <label htmlFor="difficulty">Difficulty:</label>
              <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
                {difficulties.map((diff, index) => (
                  <option key={index} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
            
            <div className="filter">
              <label htmlFor="company">Company:</label>
              <select id="company" value={company} onChange={handleCompanyChange}>
                {companies.map((comp, index) => (
                  <option key={index} value={comp}>{comp}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="seo-paragraph mb-4">
            <p>
              If you're aspiring to secure a Quantitative Developer or Software Engineering role at hedge funds and banks, 
              it's crucial to prepare thoroughly for the interview process. Familiarizing yourself with the most frequently 
              asked interview questions can significantly improve your chances of success. Key topics often include 
              quantitative analysis, data structures, algorithms, and statistical modeling.
            </p>
          </div>
          
          <div className="table-container">
            <table className={`table table-striped ${darkMode ? 'table-dark' : ''}`}>
              <thead>
                <tr>
                  <th onClick={() => sortTable(0)}>Problem Number</th>
                  <th onClick={() => sortTable(1)}>Question</th>
                  <th onClick={() => sortTable(2)}>Difficulty</th>
                  <th onClick={() => sortTable(3)}>Company</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuestions.map((question, index) => (
                  <tr key={index}>
                    <td>{question.problemNumber}</td>
                    <td>{question.question}</td>
                    <td>{question.difficulty}</td>
                    <td>{question.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      
      <div className="back-link">
        <Link to="/quant">Back to Quant Home</Link>
      </div>
    </div>
  );
}

export default Coding; 