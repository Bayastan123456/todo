import React, { useEffect } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = ({ getContact, contact, deleteContact }) => {
  useEffect(() => {
    getContact();
  }, []);

  console.log(contact);

  return (
    <div className="crad-container">
      {contact.map((item) => (
        <div className="card" key={item.id}>
          <div className="content">
            <img className="heading" src={item.image} alt="" />
            <p className="heading">{item.name}</p>
            <p className="para">{item.email}</p>
            <p className="para">{item.number}</p>
            <div className="btn-block">
              <button className="btn" onClick={() => deleteContact(item.id)}>
                delete
              </button>
              <Link to={`/edit/${item.id}`}>
                <button className="btn">Edit</button>
              </Link>
              <Link to={`/details/${item.id}`}>
                <button className="btn">details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
