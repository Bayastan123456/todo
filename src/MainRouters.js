import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layoul from "./components/Layoul/Layoul";
import HomePage from "./components/HomePage/HomePage";
import AddContact from "./components/AddContact/AddContact";
import Contact from "./components/Contact/Contact";
import axios from "axios";
import EditContact from "./components/EditContact/EditContact";
import Details from "./components/Details/Details";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const MainRouters = () => {
  const [contact, setContact] = useState([]);
  const [oneContact, setOneContact] = useState(null);
  const API = "http://localhost:8000/contact";

  async function addContact(newValue) {
    return await axios.post(API, newValue);
  }
  async function getContact() {
    let res = await axios(API);
    setContact(res.data);

    // console.log(res.data);
  }
  async function getOneProduct(id) {
    let res = await axios.get(`${API}/${id}`);
    setOneContact(res.data);
  }

  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContact();
  }
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContact();
  }
  return (
    <Routes>
      <Route path="/" element={<Layoul />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddContact addContact={addContact} />} />
        <Route
          path="/contact"
          element={
            <Contact
              getContact={getContact}
              contact={contact}
              deleteContact={deleteContact}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditContact
              getOneProduct={getOneProduct}
              oneContact={oneContact}
              updateContact={updateContact}
            />
          }
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default MainRouters;
