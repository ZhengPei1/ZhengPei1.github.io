
export default function Project(props){

    const websiteButton = props.websiteUrl ? (
        <a href = {props.websiteUrl} target = "_blank" id = "website-button">
            <button className= "button">
                Website
            </button>
        </a>
    ) : false;

    const sourceCodeButton = props.projectUrl ? (
        <a href = {props.projectUrl} target = "_blank" id = "code-button">
            <button className= "button">
                Code
            </button>
        </a>
    ) : false;

    let skills = props.skill.reduce((pre, cur) => pre.concat(cur, "    "), "");
    const project = (
        <div id = "project">

            <img src = {"/assets/".concat(props.img)} id ="project-img"></img>
            

            <div id ="project-description">
                <p id = "project-title">{props.title}</p>
                <p id = "project-detail">{props.description}</p>
                <p id = "project-skills">
                    {skills}
                </p>

                {websiteButton? websiteButton : ""}
                {sourceCodeButton? sourceCodeButton : ""}
            </div>

        </div>
    )
    return project;
}