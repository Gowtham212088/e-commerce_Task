import React from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import site_logo from "../images/site_logo.png";

function AdminNav (){

const history = useHistory()

    return(
        <nav className="navbar navbar-expand-lg bg-transparent nav-border fw-bold">
      <div className="container-fluid ">
        <a
          onClick={() => history.push("/")}
          className="navbar-brand fs-3 font-clr"
        >
          <img src={site_logo} alt="nav-img" className="mb-2" width="30px" />{" "}
          Better Buys
        </a>
        <button
          className="navbar-toggler border-"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/*CODE FOR BOOTSTRAP MODAL (SIGN IN)  */}
              <a
                className="nav-link active fs-4 font-clr me-5"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
onClick={history.push("/addUser")}
              >
                {" "}
                Add User{" "}
              </a>
            </li>
            <li className="nav-item">
            <a
                className="nav-link active fs-4 font-clr me-5"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                onClick={history.push("/viewUser")}
                  >
                {" "}
                View User{" "}
              </a>
            </li>

            <li className="nav-item">
            <a
                className="nav-link active fs-4 font-clr me-5"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                onClick={history.push("/approveProducts")}
                 >
                {" "}
                Approve products
              </a>
            </li>

         

          </ul>
         
        </div>
      </div>
    </nav>
    )
}

export default AdminNav;