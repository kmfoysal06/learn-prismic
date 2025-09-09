import Contact from './Slices/Contact.jsx';
import Experiences from './Slices/Experiences.jsx';
import Footer from './Slices/Footer.jsx';
import Header from './Slices/Header.jsx';
import Hero from './Slices/Hero.jsx';
import Projects from './Slices/Projects.jsx';
import RichText from './Slices/RichText.jsx';
import Skills from './Slices/Skills.jsx';

const RenderSlice = (slice, index) => {
    function renderSlice(slice, index) {
        switch (slice.slice.slice_type) {
            case 'hero':
                return <Hero key={index} slice={slice.slice} />;
            case 'header':
                return <Header key={index} slice={slice.slice} />;
            case 'contact':
                return <Contact key={index} slice={slice.slice} />;
            case 'projects':
                return <Projects key={index} slice={slice.slice} />;
            case 'skills':
                return <Skills key={index} slice={slice.slice} />;
            case 'footer':
                return <Footer key={index} slice={slice.slice} />;
            case 'experiences':
                return <Experiences key={index} slice={slice.slice} />;
            case 'rich_text':
                return <RichText key={index} slice={slice.slice} />;
            default:
                console.warn(`No component found for slice type: ${(slice).slice_type}`);
                return null;
        }
    }
    return renderSlice(slice, index);
}


export default RenderSlice;
