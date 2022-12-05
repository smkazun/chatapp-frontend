import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import Home from './pages/Home/Home';


//annotate the return type so an error is raised if you accidentally return some other type
const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="home" element={<Home />} />
            </Routes>
        
        </BrowserRouter>   
    );
}

export default App;