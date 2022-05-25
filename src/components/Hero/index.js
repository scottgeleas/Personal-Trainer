import React from 'react';
import About from '../About'
import Avatar from '../Avatar'
import Skills from '../Skills'
import { Row, Col } from 'react-bootstrap';
import './style.css';

export default function Hero() {
    return (
        <Row id='hero-container'>
            <Col sm={12} lg={6}>
                <Avatar />
            </Col>
            <Col sm={12} lg={6}>
                <About />
                <Skills />
            </Col>
        </Row>
    );
}


