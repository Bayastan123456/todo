import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(` http://localhost:8000/contact/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div className="details">
      <h1>Datails</h1>
      {user && (
        <div className="details-container">
          <img src={user.image} alt="error" />
          <h2>Name: {user.name}</h2>
          <h2> Number: {user.number}</h2>
          <h2> email : {user.email}</h2>
        </div>
      )}
    </div>
  );
};

export default Details;
