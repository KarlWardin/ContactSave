import React from "react";
import user from "../images/user.jpg"

const ContactDetail = (props) => {
    console.log(props);
    const {name,email} = props.location.state.contact;
    return (
        <div className="main">
            <br/><br/>
            <div className="ui card centered">
                 <div className="image">
                     <img src={user} alt="user"/>
                 </div>
                 <div className="content">
                     <div className="header">{name}</div>
                     <div className="description">{email}</div>
                 </div>
            </div>
        </div>
    );
}
export default ContactDetail;