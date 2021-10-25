import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import Pagination from "./Pagination";

const HomePagination = () => {
    const [contacts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:3003/contacts");
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    

    // const deleteUser = async (id) => {
    //     await axios.delete(`http://localhost:3003/contacts/${id}`);
    //     fetchPosts();
    // };

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = contacts.slice(indexofFirstPost, indexOfLastPost);

    console.log("get contacts");
    console.log(contacts);
    return (
        <div className="container">
            <Posts posts={currentPosts} loading={loading} />
            <br />
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
                    {currentPosts.map((user, index) => (
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
                                    {/* <Link
                                        className="btn btn-danger"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </Link> */}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination postsPerPage={postsPerPage} totalPosts={contacts.length}/>
        </div>
    );
};

export default HomePagination;
