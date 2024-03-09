export default function Contact(props){
    const contact = (
        <div id = "contact" className="section">

            <p className="section-header">Contact</p>

            <p id="contact-msg">
                <b>Interested in collaboration?</b>
                <br></br>
                <br></br>
                I'm always looking for new opportunities and challenges.
            </p>

            <a id="contact-link" href="mailto:zhengpei.pz@gmail.com">
                <button className="button">
                    Start A Conversation
                </button>
            </a>

        </div>
    );

    return contact;
}