import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [contacts, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/contacts");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/contacts/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Location</th>
            <th scope="col">Registered Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.location}</td>
              <td>{user.date}</td>
              <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <Link className="btn btn-secondary" to={`/contacts/${user.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-secondary" to={`/contacts/edit/${user.id}`}>
                    Update
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
