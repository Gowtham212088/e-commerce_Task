import React from "react";
import { useHistory } from "react-router-dom";
import admin_side from "../images/admin_side.png"
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AdminLogin = () => {

const history = useHistory()

    return (
      <div className="signIn ">
      <section className="Form mx-4 my-4  ">
        <div className="container mt-5">
          <div className="row signIn-row no-gutters">
            <div className="col-lg-5">
            <IconButton style={{color:"#4B00A2",border:"1px solid #4b00a2",position:"relative",top:"15px"}} onClick={()=>history.push("/home")}>
            {" "}
            <ArrowBackIcon  style={{ color: "#4B00A2", font: "25px" }} />{" "}
          </IconButton>
              <img src={admin_side} className="img-fluid signIn-image" alt="" />
            </div>
            <div className="col-lg-7 input-column px-5 pt-1">
              <div>
           <h1 className="vendorLogIn-font"> Admin Login </h1>
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

                <a className="my-2" href="#"> Forgot Password </a> 

                <div className="form-row">
                  <div className="col-lg-7">
                   <button onClick={()=>{history.push("/admin")}} type="button" className="btn btn-primary signIn-butt mt-2 mb-3">
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

export default AdminLogin;
