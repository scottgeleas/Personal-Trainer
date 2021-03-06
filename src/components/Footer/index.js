import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import issa from '../../images/trainer-certification.png';
import './style.css';

export default function Footer() {
    return (
        <footer>
            <Container fluid id="footer">
                <Row>
                    <Col xs={12} lg={6}>
                        <Container id="contact">
                            <h3>
                                Questions? Or want to book a{' '}
                                <span>free consultation?</span>
                            </h3>
                            <p>
                                Send an email through the{' '}
                                <Link to="/contact">contact</Link> form or call
                                me at{' '}
                                <a id="phone" href="tel:+1-603-425-9064">
                                    (603)-425-9064
                                </a>
                            </p>
                        </Container>
                    </Col>
                    <Col id="certification" xs={12} lg={6}>
                        <img src={issa} alt="issa-certification"></img>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
