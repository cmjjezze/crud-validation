import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewContact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    date: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/contacts/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">full name: {user.name}</li>
        <li className="list-group-item">email address: {user.email}</li>
        <li className="list-group-item">contact number: {user.contact}</li>
        <li className="list-group-item">location: {user.location}</li>
        <li className="list-group-item">registered date: {user.date}</li>
      </ul>
    </div>
  );
};

export default ViewContact;
