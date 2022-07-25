import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import vendor from "../images/vendor.png";
import admin_side from "../images/onlineShopping.png";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Vendorlogin = () => {

const history = useHistory()
  
  return (
    <div className="signIn ">
      <section className="Form mx-4 my-4 ">
        <div className="container">
          <div className="row signIn-row no-gutters">
            <div className="col-lg-5">

            <IconButton style={{color:"#4B00A2",border:"1px solid #4b00a2",position:"relative",top:"15px"}} onClick={()=>history.push("/")}>
            {" "}
            <ArrowBackIcon  style={{ color: "#4B00A2", font: "25px" }} />{" "}
          </IconButton>

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

                <a className="my-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" href="#"> Forgot Password </a> 

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title ms-auto" id="exampleModalLabel">You will recive a OTP via mail</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Enter Email:</label>
            <input type="email" placeholder="Email" class="form-control" id="recipient-name"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Send OTP</button>
      </div>
    </div>
  </div>
</div>

                <div className="form-row">
                  <div className="col-lg-7">
                   <button  type="button" className=" signIn-butt mt-1 mb-3">
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
