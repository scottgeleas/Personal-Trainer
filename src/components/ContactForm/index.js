import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './style.css';

export default function ContactForm() {
    const form = useRef();

    // const { statusText, setStatusText } = useState("")

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_d0eiqek', 'template_6ddebja', form.current, 'user_e3xioD9DxjxuKMVKwRYSc')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                alert("email sent!")
            }, (error) => {
                console.log(error.text);
            });
    };

    function onSubmit() {
        //try/catch, update statust text, try send email, if success 'email sent',settimeout for 3 secs, and clear status text. Catch 'something went wrong try again', settimeout again for 3 secs

    //     try {
    //         setTimeout(() => {
    //             if (sendEmail) {
    //                 console.log("Email Sent!")
    //             }
    //         }, 3000);
    //         document.getElementById("form").reset();
    //     } catch (e) {
    //         console.log(e)
    //     }

    }





    return (
        <Form id="form" ref={form} onSubmit={sendEmail} >
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
            <div>
                {/* <span>{statusText}</span> */}
                <Button
                    id="submit"
                    className="mb-3"
                    variant="primary"
                    type="submit"
                >
                    Send Email
                </Button>
            </div>
        </Form>
    );
}
