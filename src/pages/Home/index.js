import React from 'react';
import './style.css'
import Header from '../../components/Header'
import Package from '../../components/Package'
import Footer from '../../components/Footer'

export default function Home() {
    const packages = {

        package1: {
            title: 'title1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            rate: 30
        },
        package2: {
            title: 'title2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            rate: 35
        }
    }

    return (
        <div>
            <Header />
            <h1>Home</h1>
            <Package packageInfo={packages.package1} />
            <Package packageInfo={packages.package2} />
            <Footer />
        </div>
    );
}
