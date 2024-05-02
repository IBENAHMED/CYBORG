import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Container } from './components/index';
import { Header, Footer } from './layout/index';
import { Home, Profile, About, Contact } from './pages/index';

function App() {
    return (
        <>
            <BrowserRouter basename={'/CYBORGS'}>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </Container>
                <Footer />
            </BrowserRouter>
        </>
    )
};

export default App;