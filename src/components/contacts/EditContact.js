import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditContact = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    date: "",
  });

  const { name, email, contact, location, date } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    if (location === "Select Location") {
      alert("Please select location");
      return;
    }

    console.log(name);
    console.log(name.replace(/ /g, '').match(/[^a-zA-Z]/g)!==null);
    if (name.replace(/ /g, '').match(/[^a-zA-Z]/g)!==null) {
      alert("Please enter letter only [a-z],[A-Z]");
      return;
    }

    console.log(email);
    console.log(email.replace('@', '').replace('.', ''));
    console.log(email.replace('@', '').replace('.', '').match(/[^a-zA-Z0-9]/g)!==null);
    if (email.replace('@', '').replace('.', '').match(/[^a-zA-Z0-9]/g)!==null) {
      alert("Special character(s) is not valid for Email Address");
      return;
    }

    await axios.put(`http://localhost:3003/contacts/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/contacts/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label>Full Name</label>
            <input
              type="text"
              className="form-control form-control-md"
              placeholder="Last Name, First Name Middle Name"
              name="name"
              maxLength="30"
              required
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Email Address</label>
            <input
              type="email"
              className="form-control form-control-md"
              placeholder="example@email.com"
              maxLength="40"
              pattern=".+\.com" 
              required
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
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
              value={contact}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Location</label>
            <select
              id="inputState"
              className="form-control form-control-md"
              required
              name="location"
              value={location}
              onChange={(e) => onInputChange(e)}
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
              value={date}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
