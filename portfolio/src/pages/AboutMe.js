import React from "react";
import myPhoto from '../images/myphoto.jpg';
import { Row, Col, Container } from "reactstrap";
import "../styles/AboutMe.css";


function AboutMe() {
    return (
        <div>
            <section className="about-section text-center" id="about">
                <Container>
                    <Row>
                        <Col lg="8" className="mx-auto">
                            <h1 className="mb-4">About me </h1>
                            <img className="my-img img-thumbnail rounded-circle shadow-lg" src={myPhoto} alt="Saadia" />
                            <h2>Welcome to my portfolio website  <i className="far fa-smile-beam"></i> </h2>
                            <p> Hi! I’m Saadia El Fekak.
                                I'm a Full Stack web developer based in Birmingham.
                                I'm experienced in HTML, JavaScript, JQuery, CSS, NodeJS, MySQL, MongoDB, ReactJS and also a voracious learner who loves acquiring new
                                skills and tackling new challenges.

                                for more information please refer to <a href="https://drive.google.com/file/d/1r9wMMGY2XgtQHHKb7RdbjsptDptmgMQ9/view?usp=sharing"
                                    target="_blank" rel="noreferrer">my Resume...</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    );
}

export default AboutMe;