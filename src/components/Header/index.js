import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Image, Container} from 'react-bootstrap';
import dumbbell from '../../images/dumbbell.png';
import './style.css';

export default function Header() {
    return (
        <header>
            <Navbar id="navbar" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image id="logo" src={dumbbell} />
                    <LinkContainer to="/">
                        <Navbar.Brand id="brand-name">
                            Dylan Clifford
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto burger">
                            <LinkContainer to="/" className="nav-link">
                                <Nav.Link>
                                    <button id="first-link" className="link">
                                        <span>Home</span>
                                    </button>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact" className="nav-link">
                                <Nav.Link>
                                    <button className="link">
                                        <span>Contact</span>
                                    </button>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
