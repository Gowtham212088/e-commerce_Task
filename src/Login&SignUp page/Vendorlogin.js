import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import vendor from "../images/vendor.png";
import admin_side from "../images/onlineShopping.png";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Api } from "../data/API";

const Vendorlogin = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [emailResp, setEmailResp] = useState("");

  window.localStorage.setItem("token", resp.token);

  //! Modal Handlers

  const handleModalClick = (event) => {
    event.preventDefault();

    var axios = require("axios");
    var data = JSON.stringify({
      email: emailOtp,
    });

    var config = {
      method: "post",
      url: `${Api}/conform/mailVerification`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setEmailResp(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //! Login Handlers.
  const handleClick = (event) => {
    event.preventDefault();
    const signinData = {
      email: email,
      password: password,
    };
    var axios = require("axios");
    var data = JSON.stringify(signinData);

    var config = {
      method: "post",
      url: `${Api}/user/signIn`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setResp(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (resp.status == "Successful") {
      history.push("/vendor-dashboard");
    }
  };

  const history = useHistory();

  return (
    <div className="signIn ">
      <section className="Form mx-4 my-4 ">
        <div className="container">
          <div className="row signIn-row no-gutters">
            <div className="col-lg-5">
              <IconButton
                style={{
                  color: "#4B00A2",
                  border: "1px solid #4b00a2",
                  position: "relative",
                  top: "15px",
                }}
                onClick={() => history.push("/home")}
              >
                {" "}
                <ArrowBackIcon
                  style={{ color: "#4B00A2", font: "25px" }}
                />{" "}
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
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email-Address"
                        className="form-control my-3 p-3"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-lg-7">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                        className="form-control my-3 p-3"
                      />
                    </div>
                  </div>

                  <a
                    className="my-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap"
                    href="#"
                  >
                    {" "}
                    Forgot Password{" "}
                  </a>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title ms-auto"
                            id="exampleModalLabel"
                          >
                            You will recive a OTP via mail
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label
                                for="recipient-name"
                                className="col-form-label"
                              >
                                Enter Email:
                              </label>
                              <input
                                onChange={(e) => setEmailOtp(e.target.value)}
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary">
                            Send OTP
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-lg-7">
                      <button
                        type="button"
                        onClick={handleClick}
                        className="signIn-butt mt-1 mb-3"
                      >
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
