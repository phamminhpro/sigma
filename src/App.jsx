import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './pages/layout/index';
import Home from './pages/home';
import News from './pages/new';
import Partner from './pages/partner';
import Contact from './pages/contact';

function App() {
    return (
        <div className="App relative">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/news"
                    element={
                        <Layout>
                            <News />
                        </Layout>
                    }
                />

                <Route
                    path="/partner"
                    element={
                        <Layout>
                            <Partner />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <Contact />
                        </Layout>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
