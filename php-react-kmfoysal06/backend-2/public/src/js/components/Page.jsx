import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import RenderSlice from './RenderSlice.jsx';
import { BACKEND } from '../config.js';

const Page = () => {
    const {uid} = useParams();
    const [page, setPage] = useState(null);
    useEffect(() => {
        function fetchPage() {
            fetch(`${BACKEND}/api/prismic/page/${uid}`)
                .then(response => response.json())
                .then(data => setPage(data))
                .catch(error => {
                    console.error('Error fetching page data:', error);
                });
        }
        fetchPage();
    }, [])

    return (
        <div>
            {page ? (
                <div>
                    {
                        page.data.slices.map((slice) => {
                            return <RenderSlice slice={slice} key={slice.id} />
                        })
                    }
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Page;
