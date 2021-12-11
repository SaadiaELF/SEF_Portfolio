import React from "react";
import ProjectsList from "../components/ProjectsList";
// importing projects info from js file
import { projects } from "./Projects.js";
import "../styles/Portfolio.css";

function Portfolio() {

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="container">
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <h1 className="mb-4 text-center">My portfolio</h1>
                </div>
                {/* Mapping through the projects array and creating a component for each project */}
                <div id="projectsCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
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
                        <button className="carousel-control-prev" type="button" data-target="#projectsCarousel" data-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark bg-opacity-50" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-target="#projectsCarousel" data-slide="next">
                            <span className="carousel-control-next-icon bg-dark bg-opacity-50" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Portfolio;