import { useParams, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
//import { projectsData } from '../data/projects';

function ProjectDetail() {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchSingleProject = async ()=>{
      try{
        const response = await fetch(`http://localhost:5000/api/projects/${projectId}`);
        if(response.status === 404){
          throw new Error("Project not found");
        }

        if(!response.ok){
          throw new Error("Failed to fetch project details");
        }
        const data = await response.json();
        setProject(data);
      }catch(err){
        setError(err.message);
      }finally{
        setIsLoading(false);
      }
    };
    fetchSingleProject();
  },[projectId]);

  return (
    <main className="project-detail-main">
      {isLoading && <p>Loading project details ...</p>}
      {
        error && (
          <div style={{color:"red", padding:"20px"}}>
            <h2>{error}</h2>
            <Link to="/projects" className="project-detail-back">Batc to Projects</Link>
          </div>
        )
      }
      {!isLoading && !error && project && (
                <>
                    <h1>{project.title}</h1>
                    <br />
                    <p className="project-detail-text">{project.desc1}</p>
                    <p className="project-detail-text">{project.desc2}</p>
                    <p className="project-detail-text">{project.desc3}</p>
                    
                    <img src={project.image} alt={project.title} className="project-detail-img" />
                    
                    <div className="project-detail-stack">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="stack-tag">{tech}</span>
                        ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-detail-link">
                        View Source Code on GitHub
                    </a>
                    
                    <br /><br />
                    <Link to="/projects" className="project-detail-back">← Back to Projects</Link>
                </>
            )}
    </main>
  );
}

export default ProjectDetail;
