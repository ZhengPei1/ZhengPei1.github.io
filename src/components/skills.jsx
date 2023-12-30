export default function Skills(props){
    const skills = props.skills.map((skill) => {
        return <span className="skill">{skill}</span> ;
    })

    return (
        <div>
            {skills}
        </div>
    );
}