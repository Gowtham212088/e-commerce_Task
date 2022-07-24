import * as React from "react";
import SignUp from "../Login&SignUp page/SignUp";
import ViewUser from "./ViewUser";
import ViewProducts from "./ViewProducts";
import ApprovedProducts from "./ApprovedPro";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddProducts from "./AddProducts";
import AddBoxIcon from '@mui/icons-material/AddBox';

const Admin = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <IconButton> <ArrowBackIcon style={{color:"#4b00a2",font:"25px"}}/> </IconButton>
          <div class="navbar-brand" href="#">
            <img
              src="https://avatars.githubusercontent.com/u/89139024?v=4"
              width="120px"
              className="rounded-circle nav-dp"
            />{" "}
          </div>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <h3 class="nav-link active " style={{color:"#4b00a2"}} aria-current="page" href="#">
                  Welcome <br /> Username{" "}
                </h3>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
        <li class="nav-item">
          <h3 class="nav-link active add-product" style={{color:"#4b00a2"}} aria-current="page" href="#"> <AddBoxIcon style={{color:"#4b00a2"}}/> Add product</h3>
        </li>
        </ul>
            <Button class="btn btn-outline-danger" type="submit">
              Logout
            </Button>
          </div>
        </div>
      </nav>

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
