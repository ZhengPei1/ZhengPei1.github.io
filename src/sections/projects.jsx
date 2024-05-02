import projectsData from "../data/projects.json";
import Project from "../components/project";

export default function Projects(){
    const projects = projectsData.map((obj)=>objToComponent(obj));

    return (
        <div id = "projects" className="section">

            <p className="section-header">My Projects</p>

            {projects}
            
            <p className="see-more-header">
                Other Projects
            </p>

            <p className="see-more">
                <a href = "https://github.com/ZhengPei1?tab=repositories" target="_blank">See More {">"}</a>
            </p>
            
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

