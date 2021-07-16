import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteContactHandler = (id)=> {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler}/>
        );
    });

    return (
        <div>
        <br/><br/>
        <h2>Contact List
            <Link to="/add">
            <button className="button ui blue right">Add new contact</button>
            </Link>
        </h2>
        <div className="ui celled list">
            {renderContactList}
        </div>
        </div>
    )
}

export default ContactList;