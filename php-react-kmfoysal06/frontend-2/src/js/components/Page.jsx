import {useParams} from 'react-router-dom';

const Page = () => {
    const {uid} = useParams();
    return (
        <div>
            <h1>Hello, Prismic!</h1>
        </div>
    );
}

export default Page;
