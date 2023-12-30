export default function tool(props){
    const tool = (
        <div className="tool">
            <img className = "toolImg" src = {"/assets/".concat(props.img)}></img>

            <p style = {{textAlign: "center", fontSize: "20px"}}>{props.name}</p>
        </div>
    );

    return tool;
}