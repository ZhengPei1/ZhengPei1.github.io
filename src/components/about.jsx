import selfie from "/assets/profile.jpg";

export default function About(){
    const about = (
        <div id = "about">
            <h1 id = "aboutHeading">About Me</h1>

            <img className = "selfie" src = {selfie}></img>

            <p id = "aboutIntro">I'm <span className="myName">Zheng Pei</span>, a first year computer science student 
            studying at University of Waterloo.</p>
            
            

        </div>
    )
    return about;
}