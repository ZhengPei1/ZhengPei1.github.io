import { useEffect, useRef } from "react";
import Skills from "./skills";

/* Add animation based on the "show" class */
const observer = new IntersectionObserver(elements =>{

    elements.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add("show");
        }else{
            element.target.classList.remove("show");
        }
        
    })
    
});

export default function Project(props){

    const myRef = useRef();
    /*useEffect runs before the first rendering, so we need
    useRef to ensure that the element is rendered - not null*/
    useEffect(()=>{
        observer.observe(myRef.current);
    }, []);

    let websiteButton = false;
    if(props.websiteUrl !== ""){
        websiteButton = (
            <a href = {props.websiteUrl} target = "_blank" >
                <button >
                    Website
                </button>
            </a>
        )
    };
    
    const project = (
        <div className="project hidden" ref = {myRef}>
            <div className="projectDescription">
                <h2 className="row1">{props.title}</h2>
                
                <p className="row2">{props.description}</p>

                <div className="row3"><Skills skills = {props.skill}></Skills></div>

                <div className="row4">
                    <a href = {props.projectUrl} target = "_blank" >
                        <button >
                            Source Code
                        </button>
                    </a>

                    {websiteButton? websiteButton : ""}

                </div>

            </div>
            
            <img src = {"/assets/".concat(props.img)} className="projectImage"></img>
        </div>
    )

    

    return project;
}