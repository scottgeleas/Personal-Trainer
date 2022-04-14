import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Image, Col } from 'react-bootstrap';
import './style.css';
import dumbbell from '../../images/dumbbell.png';

export default function Header() {
    return (
        <header>
            <Navbar id="navbar">
                <Col>
                    <Image id="logo" src={dumbbell} />
                </Col>
                <Col>
                    <LinkContainer to="/">
                        <Navbar.Brand id="brand-name">
                            Dylan Clifford
                        </Navbar.Brand>
                    </LinkContainer>
                </Col>
                <Col>
                    <Nav>
                        <LinkContainer to="#contact" id="nav-link">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Col>
            </Navbar>
        </header>
    );
}
