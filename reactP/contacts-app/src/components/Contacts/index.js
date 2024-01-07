import { useState, useEffect } from "react";

import "./style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      Fullname: "John Doe",
      Email: "a",
        Phone: "123",
    },
    {
      Fullname: "Karen Williams",
      Email: "b",
        Phone: "456",
    },
    {
      Fullname: "Henry Johnson",
      Email: "c",
        Phone: "789",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <div className="wrapper">
        <h1>AKINCIM Personal</h1>
        <div>
        <div className="form-container">
          <Form addContact={setContacts} contacts={contacts} />
        </div>
        <div className="list-container">
          <List contacts={contacts} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
