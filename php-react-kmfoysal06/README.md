# PHP-React kmfoysal06 Portfolio

This is a PHP + React implementation of the kmfoysal06 Prismic portfolio, maintaining all the original design, functionality, and slice structure while using PHP backend for Prismic CMS integration and React for the frontend.

## 🚀 Features

- **Complete Design Parity**: Identical visual appearance to the original Next.js version
- **All Slice Components**: Header, Hero, Skills, Projects, Experiences, Contact, Footer
- **Prismic CMS Integration**: PHP backend fetches real data from Prismic CMS
- **Responsive Design**: Mobile-friendly layout with proper responsive behavior
- **Working Contact Form**: EmailJS integration for functional contact submissions
- **TypeScript Support**: Full type safety with TypeScript
- **FontAwesome Icons**: Complete icon integration
- **CSS Styling**: All original styles preserved from Next.js app

## 📦 Installation

### Prerequisites
- PHP 7.4+ with cURL extension
- Node.js 16+
- npm or yarn

### Backend Setup

```bash
cd backend
composer install  # Install PHP dependencies (optional for Prismic SDK)
```

### Frontend Setup

```bash
cd frontend
npm install
```

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the PHP backend:**
```bash
cd backend/public
php -S localhost:8000
```

2. **Start the React frontend:**
```bash
cd frontend
npm start
```

The React app will be available at `http://localhost:3000` and will communicate with the PHP backend at `http://localhost:8000`.

### Production Mode

1. **Build the React frontend:**
```bash
cd frontend
npm run build
```

2. **Copy the built files to the PHP public directory:**
```bash
cp -r frontend/build/* backend/public/
```

3. **Serve the PHP application:**
```bash
cd backend/public
php -S localhost:8000
```

## 🗂️ Project Structure

```
php-react-kmfoysal06/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── slices/          # React slice components
│   │   ├── styles/          # CSS files copied from Next.js app
│   │   ├── types.ts         # TypeScript type definitions
│   │   └── App.tsx          # Main React component
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
└── backend/                 # PHP backend application
    ├── src/
    │   └── PrismicClient.php # Prismic API client
    ├── api/
    │   └── prismic/
    │       └── home.php     # API endpoint for home page data
    ├── public/
    │   ├── index.php        # Main PHP router
    │   └── .htaccess        # Apache rewrite rules
    └── composer.json        # Backend dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory for development:

```
REACT_APP_BACKEND_URL=http://localhost:8000
```

### Prismic Configuration

The application is configured to use the `kmfoysal06` Prismic repository. To use a different repository:

1. Update the `repositoryName` in `backend/src/PrismicClient.php`
2. Ensure your Prismic repository has the same slice structure as the original

### EmailJS Configuration

Update EmailJS settings in `frontend/src/slices/Contact.tsx`:
```typescript
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = "your_public_key";
```

## 🔄 Migration from Next.js

This PHP-React version maintains 100% compatibility with the original Next.js portfolio:

- ✅ All slice components converted to standard React
- ✅ Styling preserved (CSS copied directly)
- ✅ Functionality maintained (contact forms, responsive design)
- ✅ Prismic CMS integration via PHP backend
- ✅ TypeScript support maintained
- ✅ Same slice structure and data models

## 🚀 Deployment

### Static Hosting + PHP Backend

1. Deploy the PHP backend to any PHP hosting service
2. Build the React frontend and deploy to static hosting (Netlify, Vercel, etc.)
3. Configure CORS headers on the PHP backend for cross-origin requests

### Shared Hosting

1. Build the React frontend: `npm run build`
2. Copy all files to your hosting provider:
   - PHP files go to the root directory
   - Built React files go to the public directory
3. Ensure `.htaccess` is properly configured

## 📝 API Endpoints

- `GET /api/prismic/home` - Fetch home page data with all slices
- Add more endpoints as needed for additional pages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project maintains the same license as the original Next.js implementation.