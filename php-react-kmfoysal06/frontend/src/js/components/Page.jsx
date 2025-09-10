import {useParams} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import RenderSlice from './RenderSlice.jsx';
//import { BACKEND } from '../config.js';


const fetchPage = async (uid) => {
    const res = await fetch(`${BACKEND}/api/prismic/page/${uid}`);
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
};

const Page = () => {
    const { uid } = useParams();
    const { data: page, isLoading, error } = useQuery({
        queryKey: ['page', uid],
        queryFn: () => fetchPage(uid),
        enabled: !!uid,
        staleTime: 300000 // 5 min
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
            ) : page ? (
                <div>
                    {page.data.slices.map((slice) => (
                        <RenderSlice slice={slice} key={slice.id} />
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default Page;
