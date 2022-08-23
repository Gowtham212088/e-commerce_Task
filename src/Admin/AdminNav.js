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
      <nav  className="navbar navbar-expand-lg bg-transparent nav-border fw-bold">
      <div className="container-fluid ">
        <a
          onClick={() => history.push("/")}
          className="navbar-brand fs-3 font-clr"
        >
          <img src={site_logo} alt="nav-img" className="mb-2" width="30px" />{" "}
          Better Buys
        </a>
        <button
        style={{backgroundColor:"#dec2ff",border:"2px solid #dec2ff"}}
          className="navbar-toggler"
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
                  href="/vendor-login"
                // onClick={() => history.push("/vendor-login")}
              >
                {" "}
                Seller{" "}
              </a>
            </li>
            <li className="nav-item">
         

              {/* SignUp  popover (Bootstrap modal) */}

              <a
                className="nav-link active fs-4 font-clr me-5"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Admin
              </a>

              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h2
                        className="modal-title ms-auto text-center text-danger"
                        id="staticBackdropLabel"
                      >
                        Alert !!!
                      </h2>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h5 className="text-center"> Are you a Admin ? </h5>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        No
                      </button>
                      <button
                        type="button"
                        onClick={() => history.push("/admin-login")}
                        data-bs-dismiss="modal"
                        className="btn btn-primary"
                      >
                        Yes Proceed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="d-flex">
          </div>
        </div>
      </div>
    </nav>
    )
}

export default AdminNav;