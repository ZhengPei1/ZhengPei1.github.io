import selfie from "/assets/profile.jpg";
import techData from "../data/technologies.json"

export default function About(){
    const about = (
        <div id = "about" className="section">
            <p id = "about-header" className = "section-header">About Me</p>

            <img id = "selfie" src = {selfie}></img>

            <p id = "about-description">
                I'm Zheng, a first year computer science student 
                studying at the University of Waterloo.
                <br></br> <br></br>
                Here are some technologies I'm proficient with:
            </p>
            

            {/*The skill section*/}
            <div id = "skills">
                {loadSkills()}
            </div>
            

        </div>
    )
    return about;
}


function loadSkills(){
    let techs = [];

    for(let element of techData){
        let arr = [];
        for(let tech of element.info){
            arr.push(<p className = "skill-tech">{"· " + tech}</p>);
        }
        techs.push(
            <div>
                <p className = "skill-title">{element.type}</p>
                {arr}
            </div>
        );
    }
    return techs;
}