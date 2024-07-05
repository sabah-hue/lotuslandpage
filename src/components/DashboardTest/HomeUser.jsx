import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function HomeUser() {
    useEffect(() => {
        getAllUsers();
      }, []);
      //  get all uesrs
      const [users, setUsers] = useState([]);
    
      const getAllUsers = async () => {
        try {
          const { data } = await axios.get("http://localhost:5000/api/v1/users");
          setUsers(data);
          console.log(data);
        } catch (error) {
          console.error("Error getting users from DB:", error);
        }
      };
      //  delete user
      const handleDelete = async (id) => {
        const confirm = window.confirm(
          "Are you realy need to delete this record ? "
        );
        if (confirm) {
          await axios.delete(`http://localhost:5000/api/v1/users/${id}`);
         window.location.reload();
        }
      };
    
    
      return (
        <div className="container p-5">
          <div className={`container p-5 bg-white shadow-lg rounded-2 `}>
            <div>
              {/* //////////////// buttons///////////////// */}
        
                <div>
                  <div className="container">
                    {/* ///////////user table////////////// */}
                    <div className="p-5 d-flex flex-column justify-content-center align-items-center bg-light">
                      <h1>List of Users</h1>
                      <div className="w-100 rounded bg-white border shadow p-4">
                        <div className="d-flex justify-content-between mb-5">
                        <Link to="/dashboardtest" className="btn btn-outline-success">
                           Back
                          </Link>
                          <Link to="/create" className="btn btn-outline-success">
                            Add User +
                          </Link>
                        </div>
                        <table className="bg-light text-center table table-striped">
                          <thead>
                            <tr>
                              <th>id</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((user) => (
                              <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                  <button
                                    onClick={(e) => handleDelete(user.id)}
                                    className="btn btn-danger"
                                  >
                                    <i className="far fa-trash-alt"></i>
                                  </button>
                                  <Link
                                    to={`/update/${user.id}`}
                                    className="btn btn-warning mx-2"
                                  >
                                    <i className="far fa-edit"></i>{" "}
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
    
                    {/* /////////////////////////////////// */}
                  </div>
                </div>
             
            </div>
          </div>
        </div>
      );
    
}
