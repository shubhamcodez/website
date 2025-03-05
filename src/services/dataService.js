/**
 * Data Service for handling JSON data operations
 * This service provides functions to fetch, update, and save data to JSON files
 */

// Base URL for the data files
const DATA_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://shubhamcodez.github.io/website/public/data/'
  : '/data/';

/**
 * Fetch data from a JSON file
 * @param {string} fileName - The name of the JSON file to fetch
 * @returns {Promise<Object>} - The parsed JSON data
 */
export const fetchData = async (fileName) => {
  try {
    const response = await fetch(`${DATA_BASE_URL}${fileName}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${fileName}.json: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${fileName}.json:`, error);
    throw error;
  }
};

/**
 * Save data to a JSON file
 * @param {string} fileName - The name of the JSON file to save to
 * @param {Object} data - The data to save
 * @returns {Promise<boolean>} - Whether the save was successful
 */
export const saveData = async (fileName, data) => {
  // In development, we can use the fetch API to save data
  if (process.env.NODE_ENV !== 'production') {
    try {
      const response = await fetch(`/api/save-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName,
          data
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to save ${fileName}.json: ${response.statusText}`);
      }
      
      return true;
    } catch (error) {
      console.error(`Error saving ${fileName}.json:`, error);
      return false;
    }
  } else {
    // In production (GitHub), we can't directly save to the repo
    // Instead, we'll log the data and provide instructions for manual updates
    console.log(`Data to save to ${fileName}.json:`, data);
    console.log('In production mode, data cannot be saved directly to GitHub.');
    console.log('Please manually update the JSON file in your repository.');
    
    // Store in localStorage as a backup
    localStorage.setItem(`${fileName}_data`, JSON.stringify(data));
    localStorage.setItem(`${fileName}_lastUpdated`, new Date().toISOString());
    
    return false;
  }
};

/**
 * Update projects data
 * @param {Object} data - The projects data to update
 * @returns {Promise<boolean>} - Whether the update was successful
 */
export const updateProjectsData = async (data) => {
  data.lastUpdated = new Date().toISOString();
  return await saveData('projects', data);
};

/**
 * Update blabbs data
 * @param {Object} data - The blabbs data to update
 * @returns {Promise<boolean>} - Whether the update was successful
 */
export const updateBlabbsData = async (data) => {
  data.lastUpdated = new Date().toISOString();
  return await saveData('blabbs', data);
};

/**
 * Get projects data
 * @returns {Promise<Object>} - The projects data
 */
export const getProjectsData = async () => {
  try {
    return await fetchData('projects');
  } catch (error) {
    // Fallback to localStorage if fetch fails
    const storedData = localStorage.getItem('projectLikeCounts');
    const likedProjects = localStorage.getItem('likedProjects');
    
    if (storedData && likedProjects) {
      return {
        likeCounts: JSON.parse(storedData),
        likedProjects: JSON.parse(likedProjects),
        lastUpdated: localStorage.getItem('projects_lastUpdated') || new Date().toISOString()
      };
    }
    
    // Return default data if nothing is available
    return {
      likeCounts: {
        1: 12, 2: 8, 3: 15, 4: 7, 5: 4, 
        6: 19, 7: 22, 8: 11, 9: 16, 10: 5
      },
      likedProjects: [],
      lastUpdated: new Date().toISOString()
    };
  }
};

/**
 * Get blabbs data
 * @returns {Promise<Object>} - The blabbs data
 */
export const getBlabbsData = async () => {
  try {
    return await fetchData('blabbs');
  } catch (error) {
    // Fallback to localStorage if fetch fails
    const storedData = localStorage.getItem('blabbs_data');
    
    if (storedData) {
      return JSON.parse(storedData);
    }
    
    // Return default data if nothing is available
    return {
      blabbs: [
        {
          id: 1,
          author: "Shubham Singh",
          content: "Just finished implementing a new trading algorithm using reinforcement learning. The results are promising with a Sharpe ratio of 2.3!",
          timestamp: "2 hours ago",
          likes: 15,
          comments: 3
        },
        {
          id: 2,
          author: "Shubham Singh",
          content: "Reading 'The Concepts and Practice of Mathematical Finance' by Mark Joshi. Highly recommend for anyone interested in quant finance.",
          timestamp: "1 day ago",
          likes: 24,
          comments: 5
        }
      ],
      lastUpdated: new Date().toISOString()
    };
  }
}; 