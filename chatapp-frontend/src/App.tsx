import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';


//annotate the return type so an error is raised if you accidentally return some other type
const App = () => {

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="home" element={<Home />} />
            </Routes>
        
        </BrowserRouter>   
    );
}

export default App;