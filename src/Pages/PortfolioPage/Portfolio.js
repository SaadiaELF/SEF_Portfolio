import React from "react";
import ProjectsList from "../../Components/ProjectsList/ProjectsList";
import { Container, Row } from "reactstrap";
// importing projects info from js file
import { projects } from "../../Seeds/Projects";
import "./Portfolio.css";

function Portfolio() {

    return (
        <section className="portfolio-section" id="portfolio">
            <Container>
                <Row className="align-items-center no-gutters mb-4 mt-4 mb-lg-5">
                    <h1 className="text-center">My portfolio</h1>
                </Row>
                <Row className="align-items-center no-gutters mx-auto">
                <div id="projectsCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        {/* Mapping through the projects array and creating a component for each project */}
                        {projects.map(project => (
                            <ProjectsList
                                key={project.id}
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                github={project.github}
                                demo={project.demo}
                            />
                        ))}
                        {/* Previous and Next carousel buttons */}
                        <button className="carousel-control-prev btn-control" type="button" data-target="#projectsCarousel" data-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark bg-opacity-50" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next btn-control" type="button" data-target="#projectsCarousel" data-slide="next">
                            <span className="carousel-control-next-icon bg-dark bg-opacity-50" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                </Row>
            </Container>
        </section>
    );
}


export default Portfolio;