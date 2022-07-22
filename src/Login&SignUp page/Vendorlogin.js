import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import vendor from "../images/vendor.png";
import admin from "../images/admin.png"
const Vendorlogin = () => {
  return (
    <div className="container-fluid border border-danger login-parent">
      <div className="row mt-5 justify-content-center">
        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-5">
          <div class="card mt-5 login-card">
            <div class="card-body d-flex flex-column  ">
              <div className="d-flex justify-content-center">
                {" "}
                <img src={vendor} width="95px" />{" "}
              </div>
              <h2 className="vendor-login d-flex justify-content-center fs-1">
                {" "}
                Vendor Login{" "}
              </h2>
              <TextField
                id="outlined-basic"
                className="mt-4"
                label="username or E-Mail"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                className="mt-4"
                label="Password"
                variant="outlined"
              />
              <div className="mt-2 forgot-password d-flex justify-content-center">
                <a> Forgot Password ? </a>{" "}
              </div>
              <Button className="mt-3" style={{backgroundColor:"#4b00a2", color:"azure"}} variant="Login">
                Login
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Vendorlogin;
