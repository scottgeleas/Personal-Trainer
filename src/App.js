import React from 'react';
import './App.css';
import Header from './components/Header';
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
            </Router>
        </>
    );
}

export default App;
