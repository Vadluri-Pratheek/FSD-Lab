import ProjectCard from "./ProjectCard";

function ProjectList({data}){
    return (
        <div className="project_grid">
            {data.map((item)=> (
                <ProjectCard key={item.id} project={item}/>
            ))}
        </div>
    );
}
export default ProjectList;