import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import issa from '../../images/trainer-certification.png';

export default function Footer() {
    return (
        <footer>
            <Container fluid id='footer'>
                <Row>
                    <Col id='col'>
                        <Container id='information'>
                            <h3>
                                Questions? Or want to book a free consultation?
                            </h3>
                            <p>
                                Send me an email through the{' '}
                                <Link to='/contact'>contact</Link> page or call
                                me at{' '}
                                <a id='phone' href='tel:+1-603-425-9064'>
                                    (603)-425-9064
                                </a>
                            </p>
                        </Container>
                    </Col>
                </Row>

                <Row>
                    <Col className='links'>
                        <img src={issa} alt='issa-certification'></img>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
