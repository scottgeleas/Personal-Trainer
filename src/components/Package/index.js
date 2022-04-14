import React from "react";
import { Card } from 'react-bootstrap';
import './styles.css';


export default function Package({ packageInfo }) {
    return (

        <Card>
            <Card.Title>{packageInfo.title}</Card.Title>
            <Card.Subtitle>{packageInfo.rate}</Card.Subtitle>
            <Card.Body>
                <Card.Text>{packageInfo.description}</Card.Text>
            </Card.Body>
        </Card>



    );
}