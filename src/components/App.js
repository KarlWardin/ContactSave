import './App.css';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import {uuid} from "uuidv4";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([]);

  const addContactHandler = (contact)=> {
      setContacts([...contacts,{id:uuid(),...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContacts = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  useEffect(()=>{
    const recieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(recieveContacts) setContacts(recieveContacts);
 },[]);

  useEffect(()=>{
     localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact render={(props)=> (<ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />)}/>
        <Route path="/add" render={(props)=>(<AddContact {...props} addContactHandler={addContactHandler}/>)}/>
        <Route path="/contact" component={ContactDetail}/>
      </Switch>
      </Router>
       </div>
  );
}

export default App;
