import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/home.css';
import './styles/header.css';
import { Hero, Header, Contact, Projects, Skills, Footer, Experiences, RichText } from './slices';
import { SliceType, PrismicDocument } from './types';

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
        case 'rich_text':
            return <RichText key={index} slice={slice} />;
        default:
            console.warn(`No component found for slice type: ${(slice as any).slice_type}`);
            return null;
    }
}

function App() {
    const [pageData, setPageData] = useState<PrismicDocument | null>(null);
    const [headerData, setHeaderData] = useState<PrismicDocument | null>(null);
    const [footerData, setFooterData] = useState<PrismicDocument | null>(null);
    const [footerError, setFooterError] = useState<PrismicDocument | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedLang, setSelectedLang] = useState<string | null>(null);
    const [footerLoading, setFooterLoading] = useState(true);
    const [pageEp, setPageEp] = useState<string|null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchDocument = async (document: string) => {
        try {
            const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
            let page_type;

            if(selectedLang) {
                document = document.replace(selectedLang, '') || 'home';
            }



            switch (document) {
                case 'home':
                    page_type = 'home';
                    break;
                case 'header':
                    page_type = 'header';
                    break;
                case 'footer':
                    page_type = 'footer';
                    break;
                default:
                    page_type = 'page';
                    break;
            }

            setPageEp(`${backendUrl}/api/prismic/${page_type}/${document}`);
            if (selectedLang) {
                setPageEp(`${backendUrl}/${selectedLang}/api/prismic/${page_type}/${document}`)
            }
            if(pageEp) {
                const response = await fetch(pageEp);
                if (!response.ok) throw new Error('Failed to fetch data');
                return await response.json();
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const fetchDocumentByType = async (document: string, lang: string | null) => {
        try {
            const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
            let endPointUrl = `${backendUrl}/api/prismic/${document}`;
            if (lang) {
                endPointUrl = `${backendUrl}/${lang}/api/prismic/${document}`;
            }
            const response = await fetch(endPointUrl);
            if (!response.ok) throw new Error('Failed to fetch data');
            return await response.json();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const route = window.location.pathname.replace('/', '') || 'home';
        const langList = ['en-us', 'fr-ca'];

        for (const l of langList) {
            if (route.startsWith(l)) {
                setSelectedLang(l);
                break;
            }
        }
    }, []);


    useEffect(() => {
        console.log('pageep', pageEp)
        const fetchData = async () => {
            const route = window.location.pathname.replace('/', '') || 'home';
            const page = await fetchDocument(route);
            setPageData(page || null);
        };
        fetchData();
    }, [selectedLang, pageEp]);

    useEffect(() => {
        const fetchFooterData = async () => {
            const footer = await fetchDocumentByType('footer', selectedLang);
            setFooterData(footer || null);
            setFooterLoading(false);
        };
        fetchFooterData();
    }, [selectedLang]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            const header = await fetchDocumentByType('header', selectedLang);
            setHeaderData(header || null);
        };
        fetchHeaderData();
    }, [selectedLang]);

    //if (loading) {
    //    return (
    //        <div className="App">
    //            <div className="charming-portfolio-container">
    //                <p>Loading...</p>
    //            </div>
    //        </div>
    //    );
    //}

    //if (error) {
    //    return (
    //        <div className="App">
    //            <div className="charming-portfolio-container">
    //                <p>Error: {error}</p>
    //            </div>
    //        </div>
    //    );
    //}

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
            <Header slice={headerData?.data?.slices[0]} />
            <main>
                {pageData.data.slices.map((slice: SliceType, index: number) =>
                    renderSlice(slice, index)
                )}
            </main>
            {footerLoading ? (
                <div>Loading footer...</div>
            ) : footerError ? (
                <div>Error loading footer: {footerError}</div>
            ) : (
                <Footer slice={footerData?.data?.slices[0]} />
            )}
        </div>
    );
}

export default App;

