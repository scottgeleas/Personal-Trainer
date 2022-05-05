import React from "react";
import { Card, Container } from 'react-bootstrap';
import './styles.css';


export default function Package({ packageInfo }) {
    return (
        <Container>

            <Card style={{ width: "18rem" }}>
                <Card.Title>{packageInfo.title}</Card.Title>
                <Card.Subtitle>{packageInfo.rate}</Card.Subtitle>
                <Card.Body>
                    <Card.Text>{packageInfo.description}</Card.Text>
                </Card.Body>
            </Card>

        </Container>

    );
}