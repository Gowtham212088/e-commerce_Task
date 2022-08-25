import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import { products } from "../data/Users";
import Button from "@mui/material/Button";
import App from "../App";
import { Link, useHistory } from "react-router-dom";
import site_logo from "../images/site_logo.png";
import axios from "axios";
import { useEffect } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Api } from "../data/API";
import { ThreeCircles } from  'react-loader-spinner'

const MyProducts = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [resp, setResp] = useState([]);
  console.log(resp);
  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  // const items = products
  //   .find((elem) => {
  //     return elem.name == "Gowtham";
  //   })
  //   .product.filter((fill) => {
  //     return fill.Approvel === false || true;
  //   });

  // authtoken localStorage
  const authToken = window.localStorage.getItem("token");

  // get Id from authToken
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = decodeURIComponent(
      atob(base64Url)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(base64);
  }

  let a = parseJwt(authToken);
  let userId = a._id;

  useEffect(() => {
    var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: `${Api}/seller/myProducts/userId`,
  headers: { 
    'x-auth-token': window.localStorage.getItem("token")
  },
  data : data
};

axios(config)
.then(function (response) {
    setIsLoading(false)
    setResp(response.data);
})
.catch(function (error) {
  console.log(error);
});
  }, []);

  // ?  Conditional rendering
  //  const condRendering = items.map((element) => {
  //     return element.Approvel;
  //   });

  //? Conditional styling
  // const [approval, setApproval] = useState(false)

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
            style={{ backgroundColor: "#EEE3FF", border: "2px solid #4B00A2" }}
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
                  to="/vendor-dashboard"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Seller Dashboard
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
                    <Link className="dropdown-item" to="/VendorProfile">
                      Seller Profile
                    </Link>
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
      <section>
        <div className=" table-responsive">
          <table className="table table-light table-hover">
            <thead className="bg-dark">
              <tr>
                <th scope="col"> Sl.No </th>
                <th scope="col">Poster</th>
                <th scope="col">Name</th>
                <th scope="col"> Description </th>
                <th scope="col"> Approvel </th>
              </tr>
            </thead>
            <tbody>
              {resp
                .filter((filt) => filt.name.toLowerCase().includes(query))
                .map(({ name, poster, summary, Approvel }, index) => (
                  <tr>
                    <th scope="row">{index + 1} </th>
                    <td>
                      <img src={poster} width="125px" />{" "}
                    </td>
                    <td>{name} </td>
                    <td>{summary} </td>
                    <td>
                      <h2
                        style={{
                          color: Approvel ? "green" : "red",
                          border: Approvel
                            ? "5px solid green"
                            : "5px solid red",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        {Approvel ? "Approved" : "Pending"}{" "}
                      </h2>{" "}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {isLoading && (
        <div className="d-flex justify-content-center text-center mt-5">
          {/* loader */}
          <ThreeCircles
  height="200"
  width="200"
  color="#4B00A2"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
        </div>
      )}
        </div>
      </section>
    </div>
  );
};

export default MyProducts;
