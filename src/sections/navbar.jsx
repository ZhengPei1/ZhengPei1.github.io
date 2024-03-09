export default function Navbar(){

    const navbar = (
        <div id = "navbar-top">
            <div id = "logo" className="nav-element">Zheng Pei</div>
            <div className="nav-element"></div>  {/*Empty element*/} 
            <a className="nav-element" href = "#home">Home</a>
            <a className="nav-element" href = "#about">About</a>
            <a className="nav-element" href = "#projects">Projects</a>
            <a className="nav-element" href = "#contact">Contact</a>
            <a className="nav-element" href = "https://github.com/ZhengPei1" target = "_blank" >
                <img className = "icon" src = "/assets/github.svg"></img>
            </a>
            
            <a className="nav-element" href = "https://www.linkedin.com/in/zheng-pei/" target = "_blank" >
                <img className = "icon" src = "/assets/linkedin.svg"></img>
            </a>

            <a className="nav-element" href = "mailto:zhengpei.pz@gmail.com">
                <img className = "icon" src = "/assets/email.svg"></img>
            </a>
            
        </div>
    )

    return navbar;
}

