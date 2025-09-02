import React from 'react';
import './styles/home.css';
import './styles/header.css';
import { mockData } from './mockData';
import { Hero, Header, Contact, Projects, Skills, Footer } from './slices';
import { HeroSlice, HeaderSlice, ContactSlice, ProjectsSlice, SkillsSlice, FooterSlice } from './types';

function App() {
  const renderSlice = (slice: any, index: number) => {
    switch (slice.slice_type) {
      case 'hero':
        return <Hero key={index} slice={slice as HeroSlice} />;
      case 'header':
        return <Header key={index} slice={slice as HeaderSlice} />;
      case 'contact':
        return <Contact key={index} slice={slice as ContactSlice} />;
      case 'projects':
        return <Projects key={index} slice={slice as ProjectsSlice} />;
      case 'skills':
        return <Skills key={index} slice={slice as SkillsSlice} />;
      case 'footer':
        return <Footer key={index} slice={slice as FooterSlice} />;
      default:
        console.warn(`No component found for slice type: ${slice.slice_type}`);
        return null;
    }
  };

  return (
    <div className="App">
      <main>
        {mockData.map((slice, index) => renderSlice(slice, index))}
      </main>
    </div>
  );
}

export default App;
