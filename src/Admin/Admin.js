import * as React from "react";
import SignUp from "./SignUp";
import ViewUser from "./ViewUser";
import ViewProducts from "./ViewProducts";
import ApprovedProducts from "./ApprovedPro";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useHistory } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
const Admin = () => {
  const history = useHistory();

  return ( 
    <div>
    <AdminNavbar/>
      <div className="row">
        <div className="d-flex align-items-start ">
          <div
            className="nav flex-column nav-pills me-0 col-sm-2 col-sm-2 col-sm-2 me-1 h-100 admin-col1"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Add User
            </button>
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              View User
            </button>
            <button
              className="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Approve Products
            </button>
            <button
              className="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              View Products
            </button>
          </div>
          <div
            className="tab-content content admin-col2 col-sm-10 col-md-10 col-sm-10 h-100 ms-0"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade show active h-100"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <SignUp />
            </div>
            <div
              className="tab-pane fade table-page"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <ViewUser />
            </div>
            <div
              className="tab-pane view-products fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <ViewProducts />
            </div>
            <div
              className="tab-pane approved-products fade "
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <ApprovedProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
