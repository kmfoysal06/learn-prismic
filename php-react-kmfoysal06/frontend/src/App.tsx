import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/home.css';
import './styles/header.css';
import { Hero, Header, Contact, Projects, Skills, Footer, Experiences } from './slices';
import { SliceType, PrismicDocument, HeaderSlice } from './types';
function renderSlice(slice: SliceType, index: number) {
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
}

function App() {
  const [pageData, setPageData] = useState<PrismicDocument | null>(null);
  const [headerData, setHeaderData] = useState<PrismicDocument | null>(null);
  const [footerData, setFooterData] = useState<PrismicDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [footerLoading, setFooterLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [footerError, setFooterError] = useState<string | null>(null);
  
  const fetchDocument = async (document: string) => {
    try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
        const response = await fetch(`${backendUrl}/api/prismic/${document}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
  }

  useEffect(() => {
    // Fetch home page data
    const fetchData = async () => {
      const home = await fetchDocument('home');
      setPageData(home || null);
    };
    fetchData();
  }, [pageData]);

  useEffect(() => {
    // Fetch footer data
    const fetchFooterData = async () => {
      const footer = await fetchDocument('footer');
      setFooterData(footer || null);
      setFooterLoading(false);
    }
    fetchFooterData();
  }, [footerData]);

  useEffect(() => {
    // Fetch header data
    const fetchHeaderData = async () => {
      const header = await fetchDocument('header');
      setHeaderData(header || null);
    }
    fetchHeaderData();
  }, [headerData]);


  const getHeaderSlice = async (): Promise<any> => {
    const header = await fetchDocument('header');
    return await header.data.slices[0];
  };
  const getFooterSlice = (): FooterSlice | null => {
    // // get sluces from http://localhost:8000/api/prismic/footer
    // if (!footerData) return null;
    // const slice = footerData.data.slices.find((slice: SliceType) => slice.slice_type === 'footer');
    // return slice ? (slice as FooterSlice) : null;
    return null;
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
      {/* Always render Header, pass slice if available, else default */}
      <Header slice={getHeaderSlice()} />
      <main>
        {pageData && pageData.data.slices.map((slice: SliceType, index: number) => renderSlice(slice, index))}
      </main>
      {/* Always render Footer from /api/prismic/footer */}
      {footerLoading ? (
        <div>Loading footer...</div>
      ) : footerError ? (
        <div>Error loading footer: {footerError}</div>
      ) : (
        <Footer slice={getFooterSlice()} />
      )}
    </div>
  );
}
  // Remove duplicate/invalid code block

export default App;