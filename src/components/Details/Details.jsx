import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(` http://localhost:8000/contact/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setUser(data);
        }, 1000);
      });
  }, [id]);

  return (
    <div className="details">
      {user ? (
        <>
          <h1>Datails</h1>
          <div className="details-container">
            <img src={user.image} alt="error" />
            <h2>Name: {user.name}</h2>
            <h2> Number: {user.number}</h2>
            <h2> email : {user.email}</h2>
            <Link to="/contact">
              <button className="btn-details">Вернутся</button>
            </Link>
          </div>
        </>
      ) : (
        <div class="spinner center">
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
        </div>
      )}
    </div>
  );
};

export default Details;
