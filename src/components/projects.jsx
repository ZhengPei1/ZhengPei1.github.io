import projectsData from "../data/projects.json";
import Project from "./project";

export default function Projects(){
    const projects = projectsData.map((obj)=>objToComponent(obj));

    return (
        <div id = "projects">
            <hr></hr>
            
            <h1>My Projects</h1>

            {projects}

            <p className="seeMore">
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

