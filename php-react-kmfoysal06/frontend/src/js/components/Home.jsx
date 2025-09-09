import { useQuery } from '@tanstack/react-query';
import RenderSlice from './RenderSlice.jsx';
import { BACKEND } from '../config.js';
import React from 'react';


const fetchHome = async () => {
    const res = await fetch(`${BACKEND}/api/prismic/home`);
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
};

const Home = () => {
    const { data:home, isLoading, error } = useQuery({
        queryKey: ['home'],
        queryFn: fetchHome,
        staleTime: 300000 
    });

    return (
        <div>
            {isLoading ? (
               <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}} className="kmfoysal06-center-section">
                    <p>Loading...</p>
               </div>
            ) : error ? (

               <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}} className="kmfoysal06-center-section">
                <p>Error loading home page.</p>

               </div>
            ) : home ? (
                <div>
                    {home.data.slices.map((slice) => (
                        <RenderSlice slice={slice} key={slice.id} />
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default Home;
