import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './style.css';


export default function ContactForm() {
    const form = useRef();

    const [statusText, setStatusText] = useState("")
    const [textColor, setTextColor] = useState('black')

    
    // let myState = ''
    // function updateMyState (newState) {
    //     myState = newState
    // }


    async function sendEmail(e) {
        e.preventDefault();
        try {
            
            const result = await emailjs.sendForm('service_d0eiqek', 'template_6ddebja', form.current, 'user_e3xioD9DxjxuKMVKwRYSc')
            console.log(result.text);
            setTimeout(() => {
                form.current.reset();
            }, 5000)


        } catch (error) {
            throw new Error('Error sending email', error)
        }
    };

    
    function onSubmit(e) {
        //try/catch, update statust text, try send email, if success 'email sent',settimeout for 3 secs, and clear status text. Catch 'something went wrong try again', settimeout again for 3 secs
        try {
            // check all feilds are not empty and valid, if not throw an error
            //throw new Error('required email blah', error)
            setStatusText('Sending...')
            setTextColor('black')
            sendEmail(e)
            setTimeout(() => {
                setStatusText('Email sent!')
                setTextColor('green')
            }, 5000)
            setTimeout(() => {
                setStatusText('')
            }, 8000)
        } catch (error) {
            setStatusText('Something went wrong, try again.')
            setTextColor('red')
            setTimeout(() => {
                setStatusText('')
            }, 3000)
            console.log(error)
        }
    }





    return (
        <Form id="form" ref={form} onSubmit={sendEmail}  >
            <Form.Group className="my-3 form-group">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control type="text" placeholder="John Smith" name='user_name' required />
            </Form.Group>

            <Form.Group className="my-3 form-group" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='user_email' required/>
            </Form.Group>

            <Form.Group className="my-3 form-group">
                <Form.Label>Subject:</Form.Label>
                <Form.Select aria-label="Default select example" name='subject'>
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
                <Form.Control as="textarea" rows={3} name='message' />
            </Form.Group>
            <div className="actionContainer">
                <div style={{ color: textColor }}>{statusText}</div>
                <Button
                    onClick={onSubmit}
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
