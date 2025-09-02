# React Portfolio - Prismic Content Recreation

This is a React implementation of the Next.js + Prismic portfolio, maintaining all the original design, functionality, and slice structure while being framework-independent.

## 🚀 Features

- **Complete Design Parity**: Identical visual appearance to the original Next.js version
- **All Slice Components**: Header, Hero, Skills, Projects, Contact, Footer
- **Responsive Design**: Mobile-friendly layout with proper responsive behavior
- **Working Contact Form**: EmailJS integration for functional contact submissions
- **TypeScript Support**: Full type safety with TypeScript
- **FontAwesome Icons**: Complete icon integration
- **CSS Styling**: All original styles preserved

## 📦 Installation

```bash
cd react-portfolio
npm install
```

## 🏃‍♂️ Running the Application

### Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

## 🗂️ Project Structure

```
react-portfolio/
├── src/
│   ├── slices/           # Portfolio sections
│   │   ├── Header/       # Navigation header
│   │   ├── Hero/         # Main introduction
│   │   ├── Skills/       # Technologies showcase
│   │   ├── Projects/     # Featured work
│   │   ├── Contact/      # Contact form
│   │   └── Footer/       # Footer with links
│   ├── styles/           # CSS styling files
│   │   ├── home.css      # Main styles
│   │   ├── header.css    # Header specific styles
│   │   └── fa.css        # FontAwesome styles
│   ├── types.ts          # TypeScript type definitions
│   ├── mockData.ts       # Sample content data
│   ├── prismicio.ts      # Prismic client configuration
│   └── App.tsx           # Main application component
└── public/               # Static assets
```

## 🎨 Customization

### Content Modification
Edit `src/mockData.ts` to update:
- Personal information
- Skills and technologies
- Project showcase
- Contact details
- Social media links

### Styling Changes
- `src/styles/home.css` - Main layout and component styles
- `src/styles/header.css` - Navigation header styles
- `src/index.css` - Global styles and resets

### Adding New Slices
1. Create new component in `src/slices/YourSlice/index.tsx`
2. Add type definition in `src/types.ts`
3. Update `src/slices/index.ts` to export the component
4. Add slice data to `src/mockData.ts`

## 🔧 Configuration

### Email Contact Form
Update EmailJS configuration in `src/slices/Contact/index.tsx`:
```typescript
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = "your_public_key";
```

### Prismic Integration (Optional)
The `src/prismicio.ts` file is configured for Prismic integration. To connect to your Prismic repository:
1. Update `repositoryName` in `prismicio.ts`
2. Replace mock data with actual Prismic API calls
3. Install additional Prismic dependencies as needed

## 🚀 Deployment

### Static Hosting
After running `npm run build`, deploy the `build` folder to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting provider

### Environment Variables
For production deployment, set up environment variables for:
- EmailJS configuration
- Prismic repository settings (if using)
- Any external API keys

## 🔄 Migration from Next.js

This React version maintains 100% compatibility with the original Next.js portfolio:
- ✅ All slice components converted
- ✅ Styling preserved
- ✅ Functionality maintained
- ✅ TypeScript support
- ✅ Responsive design
- ✅ Contact form integration

## 📝 License

This project maintains the same license as the original Next.js implementation.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Create React App Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
