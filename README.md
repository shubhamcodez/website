https://shubhamcodez.github.io/website/

# JSON Data Storage System for GitHub Hosting

This project includes a system for storing and updating JSON data for likes, comments, and blabbs (tweets) when hosting on GitHub Pages.

## How It Works

### Development Mode

In development mode, the application uses a simple Express server to save data to JSON files in the `public/data` directory. This allows for real-time updates to the data files during development.

To run the application in development mode:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

This will start both the React application and the Express server concurrently.

### Production Mode (GitHub Pages)

When hosting on GitHub Pages, direct file system access is not available. The application handles this by:

1. Storing data in localStorage as a backup
2. Logging data changes to the console
3. Providing instructions for manual updates

To update the JSON files in production:

1. Deploy your application to GitHub Pages
2. Monitor the console logs for data changes
3. Manually update the JSON files in your GitHub repository:
   - `public/data/projects.json` - Contains project likes data
   - `public/data/blabbs.json` - Contains blabbs and their likes/comments

## Data Structure

### Projects Data (`projects.json`)

```json
{
  "likedProjects": [1, 3, 5],
  "likeCounts": {
    "1": 12,
    "2": 8,
    "3": 15,
    "4": 7,
    "5": 4,
    "6": 19,
    "7": 22,
    "8": 11,
    "9": 16,
    "10": 5
  },
  "lastUpdated": "2024-01-01T00:00:00.000Z"
}
```

### Blabbs Data (`blabbs.json`)

```json
{
  "blabbs": [
    {
      "id": 1,
      "author": "Shubham Singh",
      "content": "Just finished implementing a new trading algorithm...",
      "timestamp": "2 hours ago",
      "likes": 15,
      "comments": 3
    },
    // More blabbs...
  ],
  "lastUpdated": "2024-01-01T00:00:00.000Z"
}
```

## Configuration

Before deploying to GitHub Pages, update the `DATA_BASE_URL` in `src/services/dataService.js` with your GitHub username and repository name:

```javascript
const DATA_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/data/'
  : '/data/';
```

## Limitations

- In production mode, data changes are not automatically saved to the JSON files
- Manual updates to the JSON files are required for persistent changes
- The application falls back to localStorage if the JSON files cannot be accessed

## Future Improvements

- Implement a serverless function (e.g., AWS Lambda, Netlify Functions) to handle data updates
- Add authentication to protect data updates
- Implement a database solution for more robust data storage

## API Endpoints

In development mode, the following API endpoints are available:

### Save Data
```
POST /api/save-data
```
Request body:
```json
{
  "fileName": "projects",
  "data": {
    "likedProjects": [1, 3, 5],
    "likeCounts": {
      "1": 12,
      "2": 8
    }
  }
}
```

### Get Data
```
GET /api/get-data/:fileName
```
Example:
```
GET /api/get-data/projects
```
Response:
```json
{
  "likedProjects": [1, 3, 5],
  "likeCounts": {
    "1": 12,
    "2": 8
  },
  "lastUpdated": "2024-01-01T00:00:00.000Z"
}
```
