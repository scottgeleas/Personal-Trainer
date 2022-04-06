import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Image, Col, Stack } from 'react-bootstrap';
import './index.css';
import dumbbell from '../../images/dumbbell.png';

export default function Header() {
    return (
        <Navbar id="navbar" expand="lg">
            <Col className='col'>
                <Image id="logo" src={dumbbell} className="align-top m-auto" />
            </Col>
            <Col className='col'>
                <LinkContainer to="/">
                    <Navbar.Brand id="brand-name" className="m-auto">
                        {' '}
                        Dylan Clifford
                    </Navbar.Brand>
                </LinkContainer>
            </Col>
            <Col id='navigation' className='col'>
                <Navbar.Toggle className="m-auto" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto" id="links">
                    <Stack direction='horizontal' gap={4}>
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

        // <Navbar id="navbar">
        //      <Container id="navigation">
        //          <LinkContainer to="/">
        //              <Container id="brand">
        //                  <Image id="logo" src={dumbbell} className='align-top'/>
        //                  <Navbar.Brand id="brand-name">
        //                      Dylan Clifford
        //                  </Navbar.Brand>
        //              </Container>
        //          </LinkContainer>
        //          <Navbar.Toggle id='collapse' aria-controls="basic-navbar-nav" />
        //          <Navbar.Collapse id="basic-navbar-nav">
        //              <Nav className="ms-auto">
        //              {/* <Stack direction="horizontal" gap={5}> */}
        //                  <LinkContainer to="/" className="nav-link">
        //                      <Nav.Link>About</Nav.Link>
        //                  </LinkContainer>
        //                  <LinkContainer to="/contact" className="nav-link">
        //                      <Nav.Link>Contact</Nav.Link>
        //                  </LinkContainer>
        //                  {/* </Stack> */}
        //              </Nav>
        //          </Navbar.Collapse>
        //      </Container>
        //  </Navbar>

        // {/* <Navbar expand='xl' id='navbar'>
        //     <Container>
        //       <Navbar.Brand href="#home">
        //         <img
        //           alt=""
        //           src={dumbbell}
        //           width="30"
        //           height="30"
        //           className="d-inline-block align-top"
        //         />{' '}
        //       Dylan Clifford
        //       </Navbar.Brand>
        //     </Container>
        //   </Navbar> */}
    );
}
