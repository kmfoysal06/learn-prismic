import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/home.css';
import './styles/header.css';
import 'react-toastify/dist/ReactToastify.css';
import { Hero, Header, Contact, Projects, Skills, Footer, Experiences } from './slices';
import { SliceType, PrismicDocument } from './types';

function App() {
  const [pageData, setPageData] = useState<PrismicDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from PHP backend
    const fetchData = async () => {
      try {
        // For development, use the backend URL directly
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
        const response = await fetch(`${backendUrl}/api/prismic/home-mock`); // Using mock for demo
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderSlice = (slice: SliceType, index: number) => {
    switch (slice.slice_type) {
      case 'hero':
        return <Hero key={index} slice={slice} />;
      case 'header':
        return <Header key={index} slice={slice} />;
      case 'contact':
        return <Contact key={index} slice={slice} />;
      case 'projects':
        return <Projects key={index} slice={slice} />;
      case 'skills':
        return <Skills key={index} slice={slice} />;
      case 'footer':
        return <Footer key={index} slice={slice} />;
      case 'experiences':
        return <Experiences key={index} slice={slice} />;
      default:
        console.warn(`No component found for slice type: ${(slice as any).slice_type}`);
        return null;
    }
  };

  if (loading) {
    return (
      <div className="App">
        <div className="charming-portfolio-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="charming-portfolio-container">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="App">
        <div className="charming-portfolio-container">
          <p>No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <main>
        {pageData.data.slices.map((slice, index) => renderSlice(slice, index))}
      </main>
    </div>
  );
}

export default App;