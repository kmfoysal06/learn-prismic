# Production Setup Instructions

## Option 1: Integrated PHP + React (Recommended)

### 1. Build the React Frontend
```bash
cd frontend
npm run build
```

### 2. Integrate with PHP Backend
```bash
# Copy built React files to PHP public directory
cp -r frontend/build/* backend/public/

# Update the PHP routing to serve React app
# The index.php is already configured for this
```

### 3. Deploy to Hosting
Upload the `backend/` directory contents to your web hosting root directory.

## Option 2: Separate Frontend and Backend

### 1. Deploy React Frontend
Build and deploy the frontend to static hosting (Netlify, Vercel, etc.):
```bash
cd frontend
npm run build
# Deploy build/ folder
```

### 2. Deploy PHP Backend
Deploy the backend to PHP hosting and update CORS settings for your frontend domain.

### 3. Update Environment Variables
Set `REACT_APP_BACKEND_URL` to your PHP backend URL.

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://your-php-backend.com
```

### Backend (Optional .env)
```
PRISMIC_REPOSITORY=kmfoysal06
PRISMIC_ACCESS_TOKEN=your_access_token
```

## Production Notes

- Use the real Prismic endpoint (`/api/prismic/home`) instead of mock data
- Ensure CORS headers are properly configured
- Set up proper error handling and caching
- Consider implementing rate limiting for the API
- Test EmailJS integration with proper credentials