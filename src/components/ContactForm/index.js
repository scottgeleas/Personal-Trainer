import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

export default function ContactForm() {
    return (
        <Form id="form">
            <Form.Group className="my-3 form-group">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control type="text" placeholder="John Smith" />
            </Form.Group>

            <Form.Group className="my-3 form-group" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="my-3 form-group">
                <Form.Label>Subject:</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select a Subject</option>
                    <option value="1">General Question</option>
                    <option value="2">Services {'&'} Pricing</option>
                    <option value="3">Request a Consultation</option>
                </Form.Select>
            </Form.Group>

            <Form.Group
                className="my-3 form-group"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button
                id="submit"
                className="mb-3"
                variant="primary"
                type="submit"
            >
                Send Email
            </Button>
        </Form>
    );
}
