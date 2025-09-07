import { useQuery } from '@tanstack/react-query';
import RenderSlice from './RenderSlice.jsx';
import { BACKEND } from '../config.js';
import React, {useState} from 'react';


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
            <h1>Home Page</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading home page.</p>
            ) : home ? (
                <div>
                    <h2>{home.uid}</h2>
                    {home.data.slices.map((slice) => (
                        <RenderSlice slice={slice} key={slice.id} />
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default Home;
