import React from "react";
import "./ProjectsList.css"

// ProjectList component holding projects information to use in Portfolio page
function ProjectsList(props) {
    return (
        <div className={props.title === 'TreePeeps' ? "carousel-item active" : "carousel-item"}>
            <div className="row no-gutters">
                <div className="col-xl-7 col-lg-6">
                    <img className="project-img border border-secondary img-fluid" src={props.image} alt={props.title} />
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                        <h4 className="font-weight-bold ">{props.title}</h4>
                        <p className="text-black-50 mb-0">{props.description}
                        </p>
                    </div>
                    <ul className="links-btns d-flex justify-content-center">
                        <li><a className="btn btn-danger btn-sm me-2" rel="noreferrer" href={props.demo} target="_blank"
                            role="button">Demo</a>
                        </li>
                        <li><a className="btn btn-secondary btn-sm" href={props.github}
                            target="_blank" rel="noreferrer" role="button">Repository</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ProjectsList;