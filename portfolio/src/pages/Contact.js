import React from "react";
import "../styles/Contact.css";
import Column from "../components/Col.js"


function Contact() {
    return (
        <div>
            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <h1 className="mb-4 text-center">Contact me</h1>
                    </div>
                    <div className="row">
                        <Column
                            icon="map-marked-alt"
                            title="Address"
                            text="Birmingham, UK"
                        />
                        <Column
                            icon="envelope"
                            title="Email"
                            text={<a href="mailto:saadiaelfekak@gmail.com">saadiaelfekak@gmail.com</a>}
                        />
                        <Column
                            icon="mobile-alt"
                            title="Phone"
                            text="+4474 9192 1092"
                        />
                        <Column
                            icon="file"
                            title="Resume"
                            text={<a href="https://drive.google.com/file/d/12gawAvTjf7SSzYI-0vghz3b9s-ZyFlTm/view?usp=sharing" target="_blank" rel="noreferrer">My resume</a>}
                        />
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Contact;