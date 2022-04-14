import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
            <Header />
            <Footer />
            <Routes>
                <Route exact path="/" element={<h1>Home</h1>} />
                <Route exact path="/contact" element={<h1>Contact</h1>}/>
            </Routes>
            <Home/>
            </Router>
        </>
    );
}

export default App;
