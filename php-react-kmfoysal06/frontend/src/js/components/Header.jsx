import { useQuery } from '@tanstack/react-query';
import RenderSlice from './RenderSlice.jsx';
import { BACKEND } from '../config.js';
import React from 'react';


const fetchHeader = async () => {
    const res = await fetch(`${BACKEND}/api/prismic/header`);
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
};

const Header = () => {
    const { data:header, isLoading, error } = useQuery({
        queryKey: ['header'],
        queryFn: fetchHeader,
        staleTime: 300000 
    });

    return (
        <div>
            {isLoading ? (
                <p></p>
            ) : error ? (
                <p></p>
            ) : header ? (
                <div>
                    <h2>{header.uid}</h2>
                    {header.data.slices.map((slice) => (
                        <RenderSlice slice={slice} key={slice.id} />
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default Header;
