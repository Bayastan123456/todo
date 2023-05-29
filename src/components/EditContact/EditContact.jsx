import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = ({ getOneProduct, oneContact, updateContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [image, setimage] = useState("");

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setNumber(oneContact.number);
      setEmail(oneContact.email);
      setimage(oneContact.image);
    }
  }, [oneContact]);

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
    updateContact(params.id, newObj);
  }
  return (
    <div className="inp-block">
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="image"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <Link to="/contact">
        <button onClick={getValue} className="btn-add">
          save
        </button>
      </Link>
    </div>
  );
};

export default EditContact;
