import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import "./Card.css";

// Card component for contact page
function ContactCard(props) {
    return (
        <Col md="3">
            <Card id="contactCard">
                <CardBody className="text-center">
                    <i className={`fas fa-${props.icon} text-black mb-2 fa-2x`}></i>
                    <h4 className="text-uppercase m-0">{props.title}</h4>
                    <hr />
                    <div className="text-black-50">{props.text}</div>
                </CardBody>
            </Card>
        </Col>
    );
}

export default ContactCard;