import projectsData from "../data/projects.json";
import Project from "../components/project";

export default function Projects(){
    const projects = projectsData.map((obj)=>objToComponent(obj));

    return (
        <div id = "projects" className="section">
            
            <p className="section-header project-header">My Projects</p>

            <p className="see-more">
                <a href = "https://github.com/ZhengPei1?tab=repositories" target="_blank">See More {">"}</a>
            </p>

            {projects}

            
        </div>
    );
}

function objToComponent(obj){
    return <Project title = {obj.title} 
                    description = {obj.description}
                    img = {obj.img}
                    skill = {obj.skill}
                    websiteUrl = {obj.websiteUrl}
                    projectUrl = {obj.projectUrl}>
            </Project>
}

