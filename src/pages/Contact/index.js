import React from 'react';
import './style.css';
import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function Contact() {
    return (
        <>
            <Header />
            <main>
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}
