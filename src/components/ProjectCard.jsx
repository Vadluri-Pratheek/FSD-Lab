import { useState } from "react";
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <article className="proj-box">
            <img
                src={project.image}
                alt={project.title}
                className="proj-img"
            />
            <div className="proj-top">
                <h3>{project.title}</h3>
                <a href={project.github} target="_blank" className="git-link">
                    <img className="icons" src="/assets/github.svg" alt="GitHub link" />
                </a>
            </div>

            <div className="proj-stack">
                {project.techStack.map((tech) => (
                    <span key={tech} className="stack-tag">{tech}</span>
                ))}
            </div>

            {showDetails && (
                <div className="proj-text">
                    <p>{project.desc1}</p>
                    <p>{project.desc2}</p>
                    <p>{project.desc3}</p>
                </div>
            )}

            <div className="proj-bottom">
                <button onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? "Hide Details" : "View Details"}
                </button>
                <Link to={`/projects/${project.id}`} className="full-page-link">
                    ↗ Full Page
                </Link>
            </div>
        </article>
    );
}

export default ProjectCard;