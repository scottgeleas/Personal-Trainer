import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Image, Col } from 'react-bootstrap';
import dumbbell from '../../images/dumbbell.png';
import './style.css';

export default function Header() {
    return (
        <header>
            <Navbar id="navbar" expand="lg" collapseOnSelect>
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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/contact" id="nav-link">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Col>
            </Navbar>
        </header>
    );
}
