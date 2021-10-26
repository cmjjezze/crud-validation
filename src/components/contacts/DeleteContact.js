import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeleteContact = () => {
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

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/contacts/${id}`);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Delete Contact {user.id}</h2>
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
        </form>
        <a href="/" className="btn btn-secondary mr-1">
          Back
        </a>
        <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Delete
        </button>
        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete Contact {user.id}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <label>Are you sure you want to delete this contact?</label><br />
                <label>Full Name : {user.name}</label><br />
                <label>Email Address : {user.email}</label><br />
                <label>Contact Number : {user.contact}</label><br />
                <label>Location : {user.location}</label><br />
                <label>Registered Date : {user.date}</label><br />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href="/" className="btn btn-success" onClick={() => deleteUser(user.id)}>Confirm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;
