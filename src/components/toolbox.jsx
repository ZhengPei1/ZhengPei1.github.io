import languagesData from "../data/languages.json";
import frameworksData from "../data/frameworks.json";
import othersData from "../data/others.json";
import Tool from "./tool";

export default function Toolbox(){
    let languages = languagesData.map((obj)=>{
        return <Tool name = {obj.name} img = {obj.img}></Tool> ;
    });

    let frameworks = frameworksData.map((obj)=>{
        return <Tool name = {obj.name} img = {obj.img}></Tool> ;
    });
    
    let others = othersData.map((obj)=>{
        return <Tool name = {obj.name} img = {obj.img}></Tool> ;
    });

    const toolbox = (
        <div id = "toolbox">
            <hr></hr>
            <h1>My Toolbox</h1>

            <div id = "toolboxContent">

                <section id = "languages">
                    <h2>Languages</h2>
                    <div className="col2Layout"> {languages} </div>
                </section>

                <section id = "frameworks">
                    <h2>Frameworks</h2>
                    <div className="col2Layout">  {frameworks} </div>
                </section>

                <section id = "others">
                    <h2>Others</h2>
                    <div className="col2Layout">  {others} </div>
                </section>
            </div>
        </div>
    );
    return toolbox;
}