import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Image, Col, Stack } from 'react-bootstrap';
import './index.css';
import dumbbell from '../../images/dumbbell.png';

export default function Header() {
    return (
        <Navbar id="navbar" expand="lg">
            <Col className="col">
                <Image id="logo" className="align-top m-auto" src={dumbbell} />
            </Col>
            <Col className="col">
                <LinkContainer to="/">
                    <Navbar.Brand id="brand-name" className="m-auto">
                        {' '}
                        Dylan Clifford
                    </Navbar.Brand>
                </LinkContainer>
            </Col>
            <Col className="col">
                <Navbar.Toggle
                    className="m-auto"
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Stack direction="horizontal" gap={4}>
                            <LinkContainer to="/" className="nav-link">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact" className="nav-link">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Col>
        </Navbar>
    );
}
