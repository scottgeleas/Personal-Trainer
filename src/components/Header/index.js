import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import './index.css';
import dumbbell from '../../images/dumbbell.png';

export default function Header() {
    return (
        <Navbar id='navbar' expand="lg">
         
                <LinkContainer to="/">
                    <Navbar.Brand id='brand-name'>
                        <Image id="logo" src={dumbbell} /> Dylan Clifford
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/" className="nav-link">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" className="nav-link">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
           
        </Navbar>
        // <Navbar id="navbar" expand="lg">
        //     <Container>
        //         <Image id="logo" src={dumbbell} />
        //     </Container>
        //     <Container>
        //         <LinkContainer to="/">
        //             <Navbar.Brand id="brand-name">Dylan Clifford</Navbar.Brand>
        //         </LinkContainer>
        //     </Container>
        //     <Container>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav>
        //                 <LinkContainer to="/" className="nav-link">
        //                     <Nav.Link>About</Nav.Link>
        //                 </LinkContainer>
        //                 <LinkContainer to="/contact" className="nav-link">
        //                     <Nav.Link>Contact</Nav.Link>
        //                 </LinkContainer>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
}
