export default function Navbar(){

    const navbar = (
        <div id = "navbar" >
            <div id = "logo">Zheng Pei</div>
            <div></div>  {/*Empty element*/} 
            <a href = "#home">Home</a>
            <a href = "#about">About</a>
            <a href = "#projects">Projects</a>
            <a href = "#toolbox">Toolbox</a>
            <a className="github" href = "https://github.com/ZhengPei1" target = "_blank" >
                <img className = "icon" src = "/assets/github.svg"></img>
            </a>
            
            <a className="linkedin" href = "https://www.linkedin.com/in/zheng-pei/" target = "_blank" >
                <img className = "icon" src = "/assets/linkedin.svg"></img>
            </a>

            <a className="email" href = "mailto:z27pei@uwaterloo.ca">
                <img className = "icon" src = "/assets/email.svg"></img>
            </a>
            
        </div>
    )

    return navbar;
}

