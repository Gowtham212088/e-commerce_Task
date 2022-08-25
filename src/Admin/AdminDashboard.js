import React from "react";
import { Link, useHistory } from "react-router-dom";
import AdminNav from "./AdminNav";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import site_logo from "../images/site_logo.png";
import ReorderIcon from '@mui/icons-material/Reorder';

function AdminDashboard() {

    const handleLogout = ()=>{
        window.localStorage.clear()
        history.push("/")
       }

  const history = useHistory();

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
        style={{backgroundColor:"#EEE3FF",border:"2px solid #4B00A2"}}
        class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"> <ReorderIcon style={{color:"#4b00a2"}}/> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
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
                    Admin Profile
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

      <div className="row justify-content-center gap-3 mt-1">
        <div
        onClick={()=>history.push("/viewUser")}
          id="Admin-col1"
          className="col-sm-3 col-md-3 col-lg-3  admin_dash_cols"
        >
          <h1 className="seller-font"> Seller Data </h1>
        </div>
        <div
        onClick={()=>history.push("/approveProducts")}
          id="Admin-col2"
          className="col-sm-3 col-md-3 col-lg-3 admin_dash_cols"
        >
          <h1 className="seller-font"> Product Approval</h1>
        </div>
        <div
        onClick={()=>history.push("/UserData")}
          id="Admin-col3"
          className="col-sm-3 col-md-3 col-lg-3 admin_dash_cols"
        >
          <h1 className="seller-font"> User Data </h1>
        </div>
        <br />
        <div
        onClick={()=>history.push("/PurchaseData")}
          id="Admin-col4"
          className="col-sm-3 col-md-3 col-lg-3 admin_dash_cols"
        >
          <h1 className="seller-font"> Purchase Data </h1>
        </div>
        <div
        onClick={() => history.push("/signUp")}
          id="Admin-col5"
          className="col-sm-3 col-md-3 col-lg-3 admin_dash_cols"
        >
          <h1  className="seller-font">
            {" "}
            Approve authority{" "}
          </h1>
        </div>
        <div
        onClick={() => history.push("/CreateCoAdmin")}
          id="Admin-col6"
          className="col-sm-3 col-md-3 col-lg-3 admin_dash_cols"
        >
          <h1  className="seller-font">
            {" "}
            Create Co-Admin{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
