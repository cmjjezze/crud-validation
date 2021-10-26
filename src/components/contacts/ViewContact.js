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
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">View Contact {user.id}</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control form-control-md"
              placeholder="Last Name, First Name Middle Name"
              name="name"
              maxLength="30"
              required
              value={user.name}
              disabled="true"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control form-control-md"
              placeholder="example@email.com"
              pattern=".+\.com"
              maxLength="40"
              required
              name="email"
              value={user.email}
              disabled="true"
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              className="form-control form-control-md"
              placeholder="999999999"
              maxLength="11"
              pattern="[0-9]{11}"
              required
              name="contact"
              value={user.contact}
              disabled="true"
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <select
              id="inputState"
              className="form-control form-control-md"
              required
              name="location"
              value={user.location}
              disabled="true"
            >
              <option>Select Location</option>
              <option>Manila</option>
              <option>Cebu</option>
            </select>
          </div>
          <div className="form-group">
            <label>Registered Date</label>
            <input
              type="date"
              className="form-control form-control-md"
              placeholder="Enter Your Website Name"
              name="date"
              required
              value={user.date}
              disabled="true"
            />
          </div>
          <Link to="/">
            <button className="btn btn-secondary">
              Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ViewContact;
