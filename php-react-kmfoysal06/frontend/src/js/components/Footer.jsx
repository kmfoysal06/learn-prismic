import { useQuery } from '@tanstack/react-query';
import RenderSlice from './RenderSlice.jsx';
//import { BACKEND } from '../config.js';
import React from 'react';


const fetchFooter = async () => {
    const res = await fetch(`${BACKEND}/api/prismic/footer`);
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
};

const Header = () => {
    const { data:footer, isLoading, error } = useQuery({
        queryKey: ['footer'],
        queryFn: fetchFooter,
        staleTime: 300000 
    });

    return (
        <div>
            {isLoading ? (
                <p></p>
            ) : error ? (
                <p></p>
            ) : footer ? (
                <div>
                    <h2>{footer.uid}</h2>
                    {footer.data.slices.map((slice) => (
                        <RenderSlice slice={slice} key={slice.id} />
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default Header;
