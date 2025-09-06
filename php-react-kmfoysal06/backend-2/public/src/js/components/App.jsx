import {Routes, Route, Link} from 'react-router-dom';
import Page from './Page.jsx';
import Home from './Home.jsx';


const App = () => {
    return (
        <div>
            <Link to={`/`}>Home</Link>
            <Link to={`/page/about`}>About</Link>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page/:uid" element={<Page />} />
            </Routes>
        </div>
    );
}

export default App;
