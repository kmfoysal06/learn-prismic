import {Routes, Route, Link} from 'react-router-dom';
import Page from './Page.jsx';
import Home from './Home.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


const App = () => {
    return (
        <div>
            {
                /**
                <Link to={`/`}>Home</Link>
                <Link to={`/page/about`}>About</Link>
                */
            }
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page/:uid" element={<Page />} />
                <Route path="/:uid" element={<Page />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
