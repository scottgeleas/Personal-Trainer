import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Image} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack'
import './index.css';
import dumbbell from '../../images/dumbbell.png';

export default function Header() {
    return (
        <Navbar expand="xl" id="navbar">
            <Container fluid id="navigation">
                <LinkContainer to="/">
                    <Container id="brand">
                        <Image id="logo" src={dumbbell} />
                        <Navbar.Brand id="brand-name">
                            ooooooooooooooooo
                        </Navbar.Brand>
                    </Container>
                </LinkContainer>
                <Navbar.Toggle id='collapse' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Stack direction="horizontal" gap={5}>
                        <LinkContainer to="/" className="nav-link">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" className="nav-link">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
