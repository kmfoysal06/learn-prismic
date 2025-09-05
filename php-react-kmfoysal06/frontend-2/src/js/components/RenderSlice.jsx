import Hero from './Slices/Hero.jsx';

const RenderSlice = (slices) => {
    function renderSlice(slice, index) {
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
            case 'rich_text':
                return <RichText key={index} slice={slice} />;
            default:
                console.warn(`No component found for slice type: ${(slice).slice_type}`);
                return null;
        }
    }
    return <div>RenderSlice {JSON.stringify(slices)}</div>;
}


export default RenderSlice;
