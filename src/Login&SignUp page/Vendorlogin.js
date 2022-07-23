import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import vendor from "../images/vendor.png";
import admin_side from "../images/onlineShopping.png";
const Vendorlogin = () => {


  
  return (
    <div className="signIn ">
      <section className="Form mx-4 my-4 ">
        <div className="container">
          <div className="row signIn-row no-gutters">
            <div className="col-lg-5">
              <img src={admin_side} className="img-fluid signIn-image" alt="" />
            </div>
            <div className="col-lg-7 input-column px-5 pt-1">
              <div>
           <h1 className="vendorLogIn-font"> Vendor Login </h1>
              <h4 className="SignIn-font"> Sign in into your account </h4>
              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="email"
                      placeholder="Email-Address"
                      className="form-control my-3 p-3"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="password"
                      placeholder="password"
                      className="form-control my-3 p-3"
                    />
                  </div>
                </div>

                <a className="my-2 forgot-pass-vendor" href="#"> Forgot Password </a> 

                <div className="form-row">
                  <div className="col-lg-7">
                   <button type="button" className="btn signIn-btn mt-1 mb-3">
                            Login
                   </button>
                  </div>
                </div>
           
              </form>
            </div>
            </div>
          </div>
        </div>
      </section>
</div>
  );
};

export default Vendorlogin;
