import ProjectList from "../components/ProjectList";
//import { projectsData } from '../data/projects';
import { useState, useEffect } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/projects");

                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <main>
            <section id="Projects">
                <h2>Projects</h2>
                {isLoading && <p>Loading Projects from server ....</p>}

                {
                    error && (
                        <div style={{ color: "red", padding: "20px" }}>
                            <h3>Error</h3>
                            <p>{error}. Please ensure the backend server is running.</p>
                        </div>)
                }
                {
                    !isLoading && !error &&
                    <ProjectList data={projects} />
                }
            </section>
        </main>
    );
}
export default Projects;