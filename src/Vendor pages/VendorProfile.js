import React, { useState, useEffect } from "react";
import { products } from "../data/Users";
import axios from "axios";
import { Link, useParams,useHistory } from "react-router-dom";
import { Api } from "../data/API";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { addProduct } from "../redux/cartRedux";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import site_logo from "../images/site_logo.png";
import VendorTable from "./vendorTable";

function VendorProfile() {
  
  const { id } = useParams();

  const history = useHistory()

  const [userDetails, setUserDetails] = useState([]);

  console.log(userDetails);

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "http://localhost:5000/get/sellerInfo",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setUserDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
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
            style={{
              backgroundColor: "#EEE3FF",
              border: "2px solid #4B00A2",
              marginRight: "25px",
            }}
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
              <li class="nav-item dropdown me-3">
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
                    <Link class="dropdown-item" to="/vendor-dashboard">
                      Seller Dashboard
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
      <div className="parent-vandorProfile ">
        <div>
          <img
            src={userDetails.userDp}
            className="vendor-dp mb-5"
            width="220px"
            height="220px"
          />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-sm-6 col-md-6 col-lg-6 d-flex align-items-center">
            {" "}
            <h2 className="d-flex justify-content-center mt-5 mb-5 vendorDp-name">
              {" "}
              {userDetails.name}{" "}
            </h2>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 justify-content-end vendorProfile-bio mt-5 mb-5 h-25">
            <h2
              className="d-flex justify-content-center"
              style={{ color: "#4B00A2" }}
            >
              Email : {userDetails.email} {" "}
            </h2>{" "}
            <hr />
            <h2
              className="d-flex justify-content-center"
              style={{ color: "#4B00A2" }}
            >
              {" "}
              Designation : {userDetails.role}{" "}
            </h2>{" "}
            <hr />
            <h2
              className="d-flex justify-content-center"
              style={{ color: "#4B00A2" }}
            >
              District : Virudhunagar{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row mt-5 d-flex justify-content-between">
          <VendorTable />
        </div>
      </div>
    {/* { userDetails.map((elem)=>{
     <UserProfile
       sellerId = {elem._id}
       name={elem.name}
       mail={elem.email}
       Role={elem.role}
       location = {elem.district}
       image={elem.userDp}
     />

    })
     } */}
    </div>
  );
}

export default VendorProfile;


// function UserProfile({sellerId,name,mail,Role,location,image}){
//   return(
//     <div>
       
//     </div>
//   )
// }
