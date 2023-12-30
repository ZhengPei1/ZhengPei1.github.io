import selfie from "../assets/profile.jpg";

export default function About(){
    const about = (
        <div id = "about">
            <h1 id = "aboutHeading">About Me</h1>

            <img className = "selfie" src = {selfie}></img>

            <p id = "aboutIntro">I'm <span className="myName">Zheng Pei</span>, a first year computer science student 
            studying at University of Waterloo.</p>
            
            <a className="github" href = "https://github.com/ZhengPei1" target = "_blank" >
                <button >
                    Github
                </button>
            </a>
            
            <a className="linkedin" href = "https://www.linkedin.com/in/zheng-pei/" target = "_blank" >
                <button >
                    LinkedIn
                </button>
            </a>

            <a className="email" href = "mailto:zhengpei.pz@gmail.com">
                <button >
                    Email
                </button>
            </a>

        </div>
    )
    return about;
}