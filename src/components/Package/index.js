import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import './index.css';


export default function Packages() {
    return (
        
            <Row>
                <Col>
                    <Card
                        style={{ width: '18rem' }}
                        className="mb-2">

                        <Card.Header>Package #1</Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>




                        <Card.Header>Package #2</Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>
        

    );
}