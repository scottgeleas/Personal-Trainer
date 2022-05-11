import React from "react";
import { Card } from 'react-bootstrap';
import './styles.css';

export default function Package({ packageInfo }) {
    return (
        <Card>
            <Card.Title className="card-title">{packageInfo.title}</Card.Title>
            <Card.Subtitle className="card-subtitle">Rate: ${packageInfo.rate}</Card.Subtitle>
            <Card.Body className="card-body">
                <Card.Text >{packageInfo.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}