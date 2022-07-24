import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from "@mui/material/Button";
import AddProduct from "./AddProducts";

const Vendor =()=>{
    return(
        <div>
          <nav class="navbar navbar-expand-lg vendor-navbar navbar-light bg-light">
            <div class="container-fluid vendor-navbar">
              <IconButton> <ArrowBackIcon style={{color:"azure",font:"25px"}}/> </IconButton>
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
                    <h3 class="nav-link active " style={{color:"azure"}} aria-current="page" href="#">
                      Welcome <br /> Username{" "}
                    </h3>
                  </li>
                </ul>
                <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
            <li class="nav-item">
              <h3 class="nav-link active add-product" style={{color:"azure"}} aria-current="page" href="#"> <AddBoxIcon style={{color:"azure",fontSize:"40px"}}/> Add product</h3>
            </li>
            </ul>
                <button class="btn btn-outline-danger" type="submit">
                  Logout
                </button>
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
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                 Add Products
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
                  My Products
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
                  className="tab-pane fade table-page"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <AddProduct/>
                </div>
                <div
                  className="tab-pane view-products fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                 
                </div>
                <div
                  className="tab-pane approved-products fade "
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  
                </div>
               </div>
            </div>
          </div>
        </div>
      );
}


export default Vendor;