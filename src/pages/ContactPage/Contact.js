import React from "react";
import { Container, Row } from "reactstrap";
import "./Contact.css";
import ContactCard from "../../Components/ContactCard/ContactCard"


function Contact() {
    return (
        <div>
            <section className="contact-section" id="contact">
                <Container>
                    <Row className="align-items-center no-gutters mb-4 mt-4 mb-lg-5">
                        <h1 className="text-center">Contact me</h1>
                    </Row>
                    <Row>
                        <ContactCard
                            icon="map-marked-alt"
                            title="Address"
                            text="Birmingham, UK"
                        />
                        <ContactCard
                            icon="envelope"
                            title="Email"
                            text={<a href="mailto:saadiaelfekak@gmail.com">saadiaelfekak@gmail.com</a>}
                        />
                        <ContactCard
                            icon="mobile-alt"
                            title="Phone"
                            text="+4474 9192 1092"
                        />
                        <ContactCard
                            icon="file"
                            title="Resume"
                            text={<a href="https://drive.google.com/file/d/1r9wMMGY2XgtQHHKb7RdbjsptDptmgMQ9/view?usp=sharing" target="_blank" rel="noreferrer">My resume</a>}
                        />
                    </Row>
                </Container>
            </section>
        </div >

    );
}

export default Contact;