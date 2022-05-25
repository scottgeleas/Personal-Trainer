import React from 'react';
import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import issa_logo from '../../images/issa-logo.png';
import './style.css';

export default function Contact() {
    return (
        <>
            <Header />
            <Row>
                <Col id="examples" className="column" sm={12} lg={6}>
                    <ListGroup id="examples-list" as="ul" variant="flush">
                        <ListGroup.Item as="li" id="list-heading">
                            Questions you can ask me:
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="list-item">
                            How did the thing happen?
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="list-item">
                            How did the thing happen?
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="list-item">
                            How did the thing happen?
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="list-item">
                            How did the thing happen?
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="list-item">
                            How did the thing happen?
                        </ListGroup.Item>
                    </ListGroup>
                    <Image id="issa-logo" src={issa_logo} />
                </Col>
                <Col id="contact-form" className="column" sm={12} lg={6}>
                    <ContactForm />
                </Col>
            </Row>
            <Footer />
        </>
    );
}
