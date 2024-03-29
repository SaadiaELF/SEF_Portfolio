import React from "react";
import myPhoto from '../../Assets/Images/myphoto.jpg';
import { Row, Col, Container } from "reactstrap";
import "./AboutMe.css";


function AboutMe() {
    return (
        <div>
            <section className="about-section text-center" id="about">
                <Container className="d-flex justify-content-right">
                    <Row>
                        <Col lg="7" className="mx-auto">
                            <h1 className="mb-4">About me </h1>
                            <img className="my-img img-thumbnail rounded shadow-lg" src={myPhoto} alt="Saadia" />
                            <h2>Welcome to my portfolio website  <i className="far fa-smile-beam"></i> </h2>
                            <p> Hi! I’m Saadia El Fekak.
                                I'm a Full Stack web developer based in Birmingham.
                                I'm experienced in HTML, JavaScript, JQuery, CSS, NodeJS, MySQL, MongoDB, ReactJS and also a voracious learner who loves acquiring new
                                skills and tackling new challenges.

                                for more information please refer to <a href="https://drive.google.com/file/d/1isgaKR5TbtAyPV_NDXL9y5BmpECiikiF/view?usp=sharing"
                                    target="_blank" rel="noreferrer">my resume...</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    );
}

export default AboutMe;