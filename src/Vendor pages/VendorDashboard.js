import React from "react";
import { Link, useHistory } from "react-router-dom";
import site_logo from "../images/site_logo.png";

function VendorDashboard() {
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

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
      <div className="row justify-content-center gap-3 mt-1">
        <div
          onClick={() => history.push("/AddProduct")}
          id="seller-col1"
          className="col-sm-3 col-md-3 col-lg-3  admin_dash_cols"
        >
          <h1 className="seller-font"> New product (Launch request) </h1>
        </div>
        <div
          onClick={() => history.push("/MyProducts")}
          id="seller-col2"
          className="col-sm-3 col-md-3 col-lg-3 seller_dash_cols"
        >
          <h1 className="seller-font">Approval Status</h1>
        </div>
        <div
        //   onClick={() => history.push("/UserData")}
          id="Admin-col3"
          className="col-sm-3 col-md-3 col-lg-3 admin_dash_cols"
        >
          <h1 className="seller-font"> User Data </h1>
        </div>
        
      
       
      </div>
    </div>
  );
}

export default VendorDashboard;
