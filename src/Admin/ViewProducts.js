import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import { products } from "../data/Users";
import site_logo from "../images/site_logo.png";
import { Link, useHistory } from "react-router-dom";
import { Api } from "../data/API";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ViewProducts = () => {


  
  const [product, setProduct] = useState([]);
  console.log(product);
  const history = useHistory();

  const updateProduct = (id) => {
    fetch(`${Api}/delete/product/${id}`, {
      method: "PUT",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }).then(() => getStudents());
  };

  const getStudents = () => {
    fetch(`${Api}/products/admin`, {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((data) => data.json())
      .then((response) => setProduct(response));
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  const items = products
    .find((elem) => {
      return elem.name == "Gowtham";
    })
    .product.filter((fill) => {
      return fill.Approvel === false;
    });
  const [query, setQuery] = useState("");

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
                <Link
                  to="/admin-dashboard"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
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
          <h1 className="text-danger"> View Products </h1>

          <div>
            <TextField
              label="Search Name"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-light  table-responsive">
          <thead>
            <tr>
              <th scope="col"> Sl.No </th>
              <th scope="col">Poster</th>
              <th scope="col">Name</th>
              <th scope="col"> Description </th>
              <th scope="col"> Approval </th>
            </tr>
          </thead>
          <tbody>
            {product
              .filter((filt) => filt.name.includes(query))
              .map(({ poster, name, summary }, id) => (
                <tr>
                  <th scope="row">{id + 1} </th>
                  <td>
                    <img src={poster} width="125px" />{" "}
                  </td>
                  <td>{name} </td>
                  <td>{summary} </td>
                  <td>
                    {" "}
                    <Button
                      onClick={() => updateProduct(id)}
                      color="success"
                      variant="outlined"
                    >
                      Approve{" "}
                      <CheckIcon
                        color="success"
                        style={{ color: "green" }}
                        fontSize="large"
                      />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewProducts;
