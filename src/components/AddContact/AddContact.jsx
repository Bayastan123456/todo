import React, { useState } from "react";
import "./addContact.css";
import { Link } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [image, setimage] = useState("");

  function getValue() {
    if ((!name, !number, !email, !image)) {
      alert("Заполните поля");
      return;
    }
    let newObj = {
      name,
      number,
      email,
      image,
    };
    addContact(newObj);
  }
  return (
    <div className="inp-block">
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="image"
        onChange={(e) => setimage(e.target.value)}
      />
      <Link to="/contact">
        <button onClick={getValue} className="btn-add">
          Add
        </button>
      </Link>
    </div>
  );
};

export default AddContact;
