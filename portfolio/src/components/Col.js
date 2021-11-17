import React from "react";
import { Col, Card, CardBody } from "reactstrap";

// Col component for contact page
function Column(props) {
    return (
        <Col
            className=""
            xs="3"
        >
            <Card
            >
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

export default Column;