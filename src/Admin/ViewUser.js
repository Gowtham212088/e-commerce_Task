import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import { products } from "../data/Users";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import AdminNav from "./AdminNav";
import site_logo from "../images/site_logo.png";
import { Api } from "../data/API";
function ViewUser() {
  const [query, setQuery] = useState("");
  const [seller, setSeller] = useState([]);
  console.log(seller);
  const history = useHistory();

  const delStudent = (id) => {
    fetch(`${Api}/delete/users/${id}`, {
      method: "DELETE",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }).then(() => getStudents());
  };

  const getStudents = () => {
    fetch(`${Api}/get/allUsersData`, {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((data) => data.json())
      .then((response) => setSeller(response));
  };
  console.log(seller);
  useEffect(() => getStudents(), []);

  const handleLogout = ()=>{
    window.localStorage.clear()
    history.push("/")
   }

  return (
    <div>
       <nav
        class="navbar navbar-expand-lg  "
        style={{ backgroundColor: "#4b00a2" }}
      >
        <div class="container-fluid">
          <a
            style={{ color: "#EEE3FF" }}
            onClick={() => history.push("/")}
            className="navbar-brand fs-3 font-clr"
          >
            <img src={site_logo} alt="nav-img" className="mb-2" width="30px" />{" "}
            Better Buys
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/admin-dashboard" class="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a onClick={handleLogout} class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <h1 className="text-danger"> View Seller Data </h1>

          <div>
            <TextField
              label="Search Name"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>

<div className="table-responsive">
      <table className="table table-light   ">
        <thead className="table-responsive">
          <tr>
            <th scope="col"> Sl.No </th>
            <th scope="col"> Image </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"> Password </th>
            <th scope="col"> Roll </th>
            <th scope="col"> District </th>
            <th scope="col"> Delete </th>
          </tr>
        </thead>
        <tbody>
          {seller
            .filter((filt) => filt.name.toLowerCase().includes(query))
            .map(({ name, email, password, role, district, userDp }, id) => (
              <tr>
                <th scope="row">{id + 1} </th>
                <td>
                  <img
                    src={userDp}
                    width="60px"
                    height="75"
                    style={{ borderRadius: "25%" }}
                    alt={name}
                  />{" "}
                </td>
                <td>{name} </td>
                <td>{email} </td>
                <td>{password} </td>
                <td> {role} </td>
                <td> {district} </td>

                <td>
                  <IconButton
                    onClick={() => delStudent(id)}
                    aria-label="delete"
                    size="large"
                  >
                    <DeleteIcon style={{ color: "red" }} fontSize="inherit" />
                  </IconButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default ViewUser;
