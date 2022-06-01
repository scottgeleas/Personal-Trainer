import React from 'react';
import About from '../About'
import Avatar from '../Avatar'
import Skills from '../Skills'
import { Row, Col } from 'react-bootstrap';
import './style.css';

export default function Hero() {
    return (
        <Row id='hero-container'>
            <Col sm={12} lg={5} id='avatar-container'>
                <Avatar />
            </Col>
            <Col sm={12} lg={7}>
                <section id='bio'>
                    <About />
                    <Skills />
                </section>
            </Col>
        </Row>
    );
}


