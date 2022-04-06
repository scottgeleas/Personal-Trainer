import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css';
import issa from '../../images/trainer-certification.png';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default function Footer() {
    return (
        <footer>
            <Container fluid id="footer">
                <Row>
                    <Col id='col'>
                        <Container id='information'>
                        <h3>Questions? Or want to book a free consultation?</h3>
                        <p>
                            {/* Call me at (505)-555-5555 or send me an emal through
                            the <a>Contact</a> page and I will get back to you
                            as soon as possible. */}
                            Send me an email through the <Link to='/contact'>contact</Link> page or call me at <a id='phone' href='tel:+1-603-425-9064'>(603)-425-9064</a>
                        </p>
                       </Container>
                    </Col>
                </Row>
                

                 {/* <div className='vl'></div> */}
                 
                <Row>
                    <Col  className="links">
                        <img src={issa} alt='issa-certification'></img>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
