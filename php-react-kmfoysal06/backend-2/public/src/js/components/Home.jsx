import { useState, useEffect } from 'react';
import RenderSlice from './RenderSlice.jsx';
import { BACKEND } from '../config.js';

const Home = () => {
    const [home, setHome] = useState(null);
    useEffect(() => {
        function fetchHome() {
            fetch(`${BACKEND}/api/prismic/home`)
                .then(response => response.json())
                .then(data => setHome(data))
                .catch(error => {
                    console.error('Error fetching home data:', error);
                });
        }
        fetchHome();
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
            {home ? (
                <div>
                    <h2>{home.uid}</h2>
                    {
                        home.data.slices.map((slice) => {
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

export default Home;
