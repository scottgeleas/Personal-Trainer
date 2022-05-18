import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './style.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Package from '../../components/Package'
import Footer from '../../components/Footer'

export default function Home() {
    const packages = {

        package1: {
            title: 'Package 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            rate: 30
        },
        package2: {
            title: 'Package 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            rate: 35
        },
        package3: {
            title: 'Package 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            rate: 40
        }
    }

    return (
        <div>
            <Header />
            <Hero/>
            <Row id='packages'>
                <Col className='package-container'>
                    <Package packageInfo={packages.package1} />
                </Col>

                <Col className='package-container'>
                    <Package packageInfo={packages.package2} />
                </Col>

                <Col className='package-container'>
                    <Package packageInfo={packages.package3} />
                </Col>
            </Row>
            <Footer />
        </div>
    );
}
